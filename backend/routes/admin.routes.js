import { Router } from "express";
import AdminController from "../controllers/admin.controller.js";
const adminRouter=Router();

adminRouter.post('/signup',AdminController.signup);
adminRouter.post('/signin',AdminController.login);
adminRouter.post('/deleteMentor', AdminController.deleteMentor);
adminRouter.post('/deleteUser', AdminController.deleteUser);
adminRouter.post('/updateUser', AdminController.updateUser);
adminRouter.post('/updateVolunteer', AdminController.updateVolunteer);
adminRouter.post('/logout',AdminController.logout);

export default adminRouter;