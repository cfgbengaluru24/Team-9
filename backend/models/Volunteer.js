import mongoose from "mongoose";
import User from "./User.js";

const VolunteerSchema=new mongoose.Schema({
    name :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    contanctNo :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    address :{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    }
})

const Volunteer=mongoose.model("Volunteer",VolunteerSchema)

export default Volunteer;