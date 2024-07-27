import mongoose from 'mongoose';

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
        type:String,
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
        type:String
    },
    points:{
        type:Number,
        default:0
    }
})

const User=mongoose.model("User",UserSchema)

export default User;