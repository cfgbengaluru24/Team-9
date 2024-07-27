import mongoose from "mongoose";

const donationSchema=mongoose.Schema({
    "name":{
        type:String,
    },
    "email":{
        type:String,
        required:true,
        default:"test@gmail.com"
    },
    "pan_no":{
        type:String,
        required:true
    },
    "transaction_id":{
        type:String,
        required:true,
        unique:true
    },
    "amount":{
        type:Number,
        required:true
    }
})

const Donations=mongoose.model("Donations",donationSchema);

export default Donations;