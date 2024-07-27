import { Router } from "express";
import UserController from "../controllers/user.controller.js";
const userRouter=Router();

userRouter.post('/signup',UserController.signup);
userRouter.post('/signin',UserController.login);

export default userRouter;