import Admin from '../models/Admin.js';
import Volunteer from '../models/Volunteer.js';
import User from '../models/User.js';
import Camps from '../models/Camps.js';

class AdminController{
    signup = async (req,res) => {
        try {

            if(!req.body){
                return res.status(400).json({message:"Data to update can not be empty"})
            }
            if(req.get('Authorization') !=  process.env.Admin) {
              return res.status(403).json({ message: "Unauthorized access" });
            }
            const { name, email, password} = req.body;
            const admin = new Admin(
                {
                    name,
                    email,
                    password
                }
            );
            await admin.save();
            res.status(201).json(admin);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    login = async (req, res) => {
        try{
            const {email, password } = req.body;
            const admin = await Admin.findOne({ email });
            if(req.get('Authorization') !=  process.env.Admin) {
                return res.status(403).json({ message: "Unauthorized access" });
              }
            if (admin.password != password) {
                return res.status(401).json({ message: "Invalid email or password" });
            } else {
                res.json({ message: "Logged in successfully" + admin });
            }     
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    deleteVolunteer = async (req,res) => {
        try {
            if(req.params !=  process.env.Admin) {
              return res.status(403).json({ message: "Unauthorized access" });
            }
            const volunteerId = Volunteer.findOne({email: req.body.email})._id;
            const deletedVolunteer = await Volunteer.findByIdAndDelete(volunteerId); 
            res.json({ message: "Mentor deleted successfully" + deletedVolunteer});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    deleteUser = async (req,res) => {
        try {
            if(req.params !=  process.env.Admin) {
              return res.status(403).json({ message: "Unauthorized access" });
            }
            const userId = User.findOne({email: req.body.email})._id;
            const deletedUser = await User.findByIdAndDelete(userId); 
            res.json({ message: "Mentor deleted successfully " + deletedUser});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } 

    updateVolunteer = async (req,res) => {
        try {
            if(req.params !=  process.env.Admin) {
              return res.status(403).json({ message: "Unauthorized access" });
            }
            const volunteerId = Volunteer.findOne({email: req.body.email})._id;
            const updatedVolunteer = await Volunteer.findByIdAndUpdate(volunteerId, req.body, { new: true });
            res.json({ message: "Mentor updated successfully " + updatedVolunteer });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    updateUser = async (req,res) => {
        try {
            if(req.params !=  process.env.Admin) {
              return res.status(403).json({ message: "Unauthorized access" });
            }
            const userId = User.findOne({email: req.body.email})._id;
            const User = await User.findByIdAndUpdate(userId, req.body, { new: true });
            res.json({ message: "User updated successfully" + User});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    postPrograms=async (req,res)=>{
        try{
            const {name,location,volunteer_count,description}=req.body;
            const newProgram=new Camps({
                name,
                location,
                volunteer_count,
                description
            })
            await newProgram.save();
            res.status(201).json({"message":"Added Progam Sucessully"})
        }catch(e){
            console.log(e.message);
            res.status(400).json({"message":e.message})
        }
    }

}

export default new AdminController();
