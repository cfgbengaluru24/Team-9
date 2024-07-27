const mongoose=require('mongoose')

const ReportSchema=new mongoose.Schema({

})

const Report=mongoose.model("User",ReportSchema)

module.exports=Report;