import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors()) // cors can take object for white listing 

app.use(cors({
    origin:process.env.CORS_ORIGIN, // to allows which origins * indicate all origins
    
    credentials:true
}))

// prepartion to take data from diifrenct formats   

app.use(express.json({limit:"16kb"})) // json format
app.use(express.urlencoded({extended:true,limit:"16kb"})) // for url format and you can also limit them
app.use(express.static("public")) // for keeping static data like photos ,pdf if you want to store them i am storing in public and your wish you can sotre any where
app.use(cookieParser()) // to create cookie in client and we can perform crud opeartions on them

export { app } 