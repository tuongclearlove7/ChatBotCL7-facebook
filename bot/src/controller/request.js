require("dotenv").config();
import db from '../models/index.js';
import { table } from "console";
import { response, text } from "express";
import res, { get } from "express/lib/response";
import request from "request";
const fs = require("fs");


let app_request = async (req,res)=>{
    
      console.log("reload app");
  
      return res.render('test1.ejs');
  }

module.exports = {

    app_request: app_request,
    
}









