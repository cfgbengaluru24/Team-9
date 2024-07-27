import Volunteer from '../models/Volunteer.js';

class VolunteerController{
    signup = async (req,res) => {
        try {
            if(!req.body){
                return res.status(400).json({message:"Data to update can not be empty"})
            }
            const { name, email, contactNo, password, address, qualification, experience } = req.body;
            const volunteer = new Volunteer(
                {
                    name,
                    email,
                    contactNo,
                    password,
                    address,
                    qualification,
                    experience
                }
            );
            await volunteer.save();
            res.status(201).json(volunteer);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    login = async (req, res) => {
        try{
            const {email, password } = req.body;
            const volunteer = await Volunteer.findOne({ email });
            if (volunteer.password != password) {
                return res.status(401).json({ message: "Invalid email or password" });
            } else {
                res.json({ message: "Logged in successfully", volunteer });
            }     
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    editInfo = async (req, res) => {
        try {
            const { id } = req.params;
            if (!req.body) {
                return res.status(400).json({ message: "Data to update can not be empty" });
            }
            const updatedVolunteer = await Volunteer.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedVolunteer) {
                return res.status(404).json({ message: "Volunteer not found" });
            }
            res.json(updatedVolunteer);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new VolunteerController()