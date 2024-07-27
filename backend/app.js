import mongoose from "mongoose";
import cors from 'cors';
import express from 'express';
import {config} from "dotenv";
import mainRouter from "./routes/main.routes.js";

config();



const app=express();
app.use(cors());
app.use(express.json());

app.use('/api/v1',mainRouter);
app.use('*',(req,res)=>{
    res.status(400).json({"message":"Not Found"});
})

const PORT=process.env.PORT||3000

app.listen(PORT,async()=>{
    try{
      const db=await mongoose.connect(`${process.env.MONGO_URL}`);
    }catch(e){
        console.log(e);
    }
    console.log("Server working");
})