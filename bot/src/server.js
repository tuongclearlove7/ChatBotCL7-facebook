import express from "express";
import viewEngine from "./config/viewEngine";
import initWrbrouter from "./routers/web";
import bodyParser from "body-parser";
import connect_db from './config/connect_database'
require("dotenv").config();

let app = express();
let port = process.env.PORT || 8080;
let local = process.env.REACT

viewEngine(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
initWrbrouter(app);
//connect_db(); //run database

app.listen(port, () => {

    console.log("App listening at http://localhost:",port);
});













