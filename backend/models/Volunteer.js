import mongoose from "mongoose";

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
    contactNo :{
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
    },
    points:{
        type:Number,
        default:0
    }
})

const Volunteer=mongoose.model("Volunteer",VolunteerSchema)

export default Volunteer;