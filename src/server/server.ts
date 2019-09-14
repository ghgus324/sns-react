import Express from "express";
import next from "next";

const dev = process.env.NODE_ENV !=="production";

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(()=>{
    const express =Express();

    express.get("*",(req,res)=>handle(req,res));

    if(process.env.NODE_ENV === "development"){
        // const https = require("https");
        // //cookie 등
    }
    const server = express.listen(process.env.PORT|| 3000, function(){
        console.log("express app is starting");
    });
    server.keepAliveTimeout=0;

})