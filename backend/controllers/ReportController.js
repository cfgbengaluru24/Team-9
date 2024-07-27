const {Reports}=require('../models/Report');

class ReportController{
    async signup(req,res){
        res.status(201).json({"message":"Working fine"})
    }
}

module.exports=new ReportController()