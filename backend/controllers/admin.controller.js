import Admin from '../models/Admin.js';

class AdminController{
    signup = async (req,res) => {
        try {
            if(!req.body){
                return res.status(400).json({message:"Data to update can not be empty"})
            }
            if(req.params !=  process.env.Admin) {
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
            if(req.params !=  process.env.Admin) {
                return res.status(403).json({ message: "Unauthorized access" });
              }
            if (admin.password != password) {
                return res.status(401).json({ message: "Invalid email or password" });
            } else {
                res.json({ message: "Logged in successfully", admin });
            }     
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new AdminController();
