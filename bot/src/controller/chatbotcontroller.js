require("dotenv").config();
import db from '../models/index.js';
import { table } from "console";
import { response, text } from "express";
import res, { get } from "express/lib/response";
import request from "request";
import { handleMessage } from './Handle_Message.js';
import { handlePostback } from './Handle_postback.js';


const fs = require("fs");
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
let VERIFY_TOKEN = process.env.VERIFY_TOKEN;

let getHomePage = async (req,res)=>{

   try{

     let data = await db.User.findAll();

     console.log(data);

     return res.render('index.ejs',{

            data : JSON.stringify(data),
         });
    
     }
     catch(e){

        console.log(e);
      }
  
    console.log("reload app");
}

let postWebhook = (req,res) =>{

    let body = req.body;

    if (body.object === 'page') {

        body.entry.forEach(function(entry) 
    {

    
    let webhook_event = entry.messaging[0];

    console.log('Event : ',webhook_event);


    let sender_psid = webhook_event.sender.id;

    console.log('Sender PSID : ' + sender_psid);

    
    if (webhook_event.message) {

        handleMessage(sender_psid, webhook_event.message); 

    } 

    else if (webhook_event.postback) {

            handlePostback(sender_psid, webhook_event.postback);

        };
    });

    res.status(200).send('EVENT_RECEIVED');

    }
    
    else{

      res.sendStatus(404);
    }
};

let getWebhook = (req,res) =>{

    console.log('verify token : ',VERIFY_TOKEN)

    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if(mode && token){

        if(mode === "subscribe"&&token === VERIFY_TOKEN){ 

            console.log("WEBHOOK_VERIFY");

            res.status(200).send(challenge);

        }else{

            res.sendStatus(403);
            }   
        }
};


export function callSendAPI(sender_psid, response) {

    let request_body = {

      "recipient": {

        "id": sender_psid
      },

      "message": response
    }
    
    request({

      "uri": "https://graph.facebook.com/v2.6/me/messages",
      "qs": { "access_token": PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body

    },(err, res, body) => {

        if (!err) {

          console.log('message sent!');//
        
        } else {

          console.error("Unable to send message:" + err);
        }
    });
}

module.exports = {

    getHomePage: getHomePage,
    getWebhook: getWebhook,
    postWebhook: postWebhook
}












