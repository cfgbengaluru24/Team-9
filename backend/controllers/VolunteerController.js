const {Volunteer}=require('../models/Volunteer');

class VolunteerController{
    async signup(req,res){
        res.status(201).json({"message":"Working fine"})
    }
}

module.exports=new VolunteerController()