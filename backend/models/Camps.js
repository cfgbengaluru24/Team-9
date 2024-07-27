import mongoose from "mongoose";

const CampsSchema=new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "location":{
        type:String,
        required:true,
    },
    "volunteer_count":{
        type:Number,
        required:true
    },
    "description":{
        type:String,
        required:true
    }
})

const Camps=mongoose.model("Camps",CampsSchema);

export default Camps;