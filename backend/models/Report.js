import mongoose from 'mongoose';

const ReportSchema=new mongoose.Schema({
    reportText:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    diagnostics:{
        type:String,
        required:true
    },
    prescription:{
        type:String,
        required:true
    },
    nextVisit:{
        type:Date,
        required:true
    }
})

const Report = mongoose.model("Report",ReportSchema)

export default Report;