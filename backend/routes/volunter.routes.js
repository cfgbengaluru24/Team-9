import { Router } from "express";
import volunteerController from "../controllers/volunteer.controller.js";
const volunteerRouter=Router();

volunteerRouter.post('/signup',volunteerController.signup);
volunteerRouter.post('/signin',volunteerController.login);
volunteerRouter.post('/editInfo',volunteerController.editInfo);

export default volunteerRouter;