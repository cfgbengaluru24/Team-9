import mongoose from 'mongoose';
import Mentor from './Volunteer.js';

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    contactNo:{
        type:String,
        required:true,
    },
    parentName:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    location:{
        type:[String],
    },
    schoolName:{
        type:String,
        required:true
    },
    mentor:{
        type: Mentor,
        ref: "Mentor"
    }
})

const User=mongoose.model("User",UserSchema)

module.exports=User;