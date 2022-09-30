import express from "express";
import viewEngine from "./config/viewEngine";
import initWrbrouter from "./routers/web";
import bodyParser from "body-parser";
import connect_db from './config/connect_database'
require("dotenv").config();

let app = express();


viewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


initWrbrouter(app);
// connect_db();


let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("App profile is running on port : ", port);
});














