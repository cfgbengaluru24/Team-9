const {User}=require('../models/User');

class UserController{
    async signup(req,res){
        res.status(201).json({"message":"Working fine"})
    }
}

const UserControllerinstance=new UserController();
module.exports=UserControllerinstance;