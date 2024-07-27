import Camps from "../models/Camps.js";

class CampController{
    getAll=async (req,res)=>{
        try{
            const result=await Camps.find({});
            res.status(200).json({result})
        }catch(e){
            console.log(e.message);
            res.status(400).json({"message":e.message})
        }
    }
    reduceCount=async (req,res)=>{
        try{
            const id=req.params.id;
            let result=await Camps.findById({id});
            result.volunteer_count-=1;
            await result.save();
            res.status(200).json({"message":"Count Updated"});

        }catch(e){
            console.log(e.message);
            res.status(400).json({"message":e.message})
        }
    }
}

export default new CampController();