import User from '../models/User.js';

class UserController{
    signup = async (req,res) => {
        try {
            if(!req.body){
                return res.status(400).json({message:"Data to update can not be empty"})
            }
            const { name, email, contactNo, password, parentName, dob, location, schoolName} = req.body;
            const user = new User(
                {
                    name,
                    email,
                    contactNo,
                    password,
                    parentName,
                    dob,
                    location,
                    schoolName
                }
            );
            await user.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    login = async (req, res) => {
        try{
            const {email, password } = req.body;
            const user = await User.findOne({ email });
            if (user.password != password) {
                return res.status(401).json({ message: "Invalid email or password" });
            } else {
                res.json({ message: "Logged in successfully", user });
            }     
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new UserController();
