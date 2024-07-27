import Donations from "../models/Donations.js";
import Stripe from 'stripe';
class DonationController{
    async donate(){
        //Instantiatie stripe
        const newInstance=Stripe.Stripe()
    }
}

export default new DonationController();