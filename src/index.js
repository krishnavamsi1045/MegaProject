import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express'
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import colors from 'colors'

import {app} from './app.js'




connectDB()
.then(()=>{
    console.log(`db connected man`);
    app.on("error",()=>{console.log("error connection app")})
    app.listen(process.env.PORT || 1000,()=>{console.log(`app connected at : http://localhost:${process.env.PORT}`);
    })
    
    
})
.catch((error)=>{})


/*

;(async ()=>{
    try{
     await   mongoose.connect(process.env.MONGODB_URL);
     console.log("hey server connected man");
        
     app.on("Error",(error)=>{
            console.log(`server can't be started some problem occured:`+error);
            
        })

        app.listen(process.env.PORT,()=>{
            console.log(`you'r server started listening at http://localhost:{process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log("Error hey you got error  from mongodb :"+error);
        
    }
})()

*/