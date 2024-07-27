import { Router } from "express";
import volunteerController from "../controllers/volunteer.controller.js";
const volunteerRouter=Router();

volunteerRouter.post('/signup',volunteerController.signup);
volunteerRouter.post('/signin',volunteerController.login);
volunteerRouter.put('/logout',volunteerController.logout);
volunteerRouter.post('/editInfo',volunteerController.editInfo);
volunteerRouter.post('/insertReport')

export default volunteerRouter;