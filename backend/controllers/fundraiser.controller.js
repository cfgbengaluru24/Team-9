import Donations from "../models/Donations.js";
import Stripe from 'stripe';
import bcrypt from 'bcrypt';
import contactEmail from "../utils/nodemailer.js";
class DonationController{
    async donate(req,res){
        //Instantiatie stripe
        try{
        let {name,email,pan_no,transaction_id,amount}=req.body;
        const stripeInstance=Stripe(process.env.API_TEST_KEY);
        
        if(name===""){
            name="Anonymous";
        }
        const rounds=10;
        const salt=bcrypt.genSaltSync(rounds);
        let hashedPan_no=await bcrypt.hashSync(transaction_id,salt);
        pan_no=hashedPan_no;
        const donation=new Donations({
            name,
            email,
            pan_no,
            transaction_id,
            amount
        })
        const customer = await stripeInstance.customers.create(
            {
            description: `Donation from ${name} of rs ${amount}`,
            },
        );
        await donation.save();
        const mail = {
                from: "Admin",
                to: email,
                subject: `Your Donation recipt ${transaction_id}`,
                html: `
                    <p>Thank you For donating</p>
                    <h4>Name : ${name}</h4>
                    <h5>Email :${email}</h5>
                    <h5>Amount :${amount}</h5>
                    <img src="https://ibb.co/LzhvTxr" width="360px" height="100px"></img>
                    `,
            };
        await contactEmail.sendMail(mail, (error) => {
            if (error) {
            throw new Error(error.message);
            }
        });
        res.status(200).json(donation);
        }catch(e){
            console.log(e.message);
            res.status(400).json({"message":e.message});
        }
    }
}

export default new DonationController();