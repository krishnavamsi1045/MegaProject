import mongoose, { connect } from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express'
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import colors from 'colors'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
connectDB()
app.use("/", (req, res) => {
    res.send("Api is Running");
  });
  
  app.listen(PORT, () => {
    console.log(`Server Started on ${process.env.PORT}`.yellow.bold);
  });
//connect()

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