import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import reportController from "../controllers/report.controller.js";
const userRouter=Router();

userRouter.post('/signup',UserController.signup);
userRouter.post('/signin',UserController.login);
userRouter.post('/logout',UserController.logout);
userRouter.post('/getReport/:id',reportController.getReports);

export default userRouter;