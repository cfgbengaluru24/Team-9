const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const {mainRouter}=require('./routes/index');
require('dotenv').config();

const app=express()
//Connect to the database
const db=mongoose.connect(`${process.env.MONGO_URL}`).then(()=>{console.log("successfully connected to mongo db")}).catch((err)=>{console.log(err)})

//All middleware instenaited
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())

app.use('/api/v1',mainRouter)
app.use('*',(req,res)=>{
    res.status(400).json({"message":"Not Found"})
})

const PORT=process.env.PORT||3000;
app.listen(PORT,(req,res)=>{
    console.log(`Port started in port ${PORT}`)
})