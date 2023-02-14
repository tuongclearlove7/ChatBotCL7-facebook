require("dotenv").config();
import db from '../models/index.js';
import { table } from "console";
import { response, text } from "express";
import res, { get } from "express/lib/response";
import request from "request";
const fs = require("fs");


let app_request = async (req,res)=>{
    
    /*try{

        let data = await db.User.findAll();
   
       // console.log(data);
   
        return res.render('test1.ejs',{
   
               data : JSON.stringify(data),
            });
       
        }
        catch(e){
   
           console.log(e);
         }*/
     
         console.log("reload app");

       return res.render('test1.ejs');
  }

module.exports = {

    app_request: app_request,
    
}









