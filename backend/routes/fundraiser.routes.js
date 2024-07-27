import {Router} from 'express';
import fundraiserController from '../controllers/fundraiser.controller.js';
const fundRaiserRouter=Router();
fundRaiserRouter.post('/donateFunds',fundraiserController.donate);

export default fundRaiserRouter;