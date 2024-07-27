import User from '../models/User.js';
import * as bcrypt from 'bcrypt';
class UserController{
    signup = async (req,res) => {
        try {
            if(!req.body){
                return res.status(400).json({message:"Data to update can not be empty"})
            }
            let { name, email, contactNo, password, parentName, dob, location, schoolName} = req.body;
            const saltRounds=10;
            const salt=await bcrypt.genSalt(saltRounds);
            const hashedPassword=bcrypt.hashSync(password,salt);
            password=hashedPassword
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
            const saltRounds=10;
            const salt=bcrypt.genSalt(saltRounds);
            if (!bcrypt.compareSync(password,user.password)) {
                return res.status(401).json({ message: "Invalid email or password" });
            } else {
                user.updateOne({points: user.points+5});
                res.json({ message: "Logged in successfully", user });
            }     
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    logout = async (req, res) => {
        try{
            const {email} = req.body;
            const user = await User.findOne({
                email
            });
            if (!user) {
                return res.status(401).json({ message: "User not found" });
            } else {
                res.json({ message: "Logged out successfully" });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

export default new UserController();
