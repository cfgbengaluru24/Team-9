import { Router } from "express";
import userRouter from "./user.routes.js";
import volunteerRouter from "./volunter.routes.js";
import reportRouter from "./report.routes.js";
import fundRaiserRouter from "./fundraiser.routes.js";
const mainRouter=Router();

mainRouter.use('/user',userRouter);
mainRouter.use('/volunter',volunteerRouter);
mainRouter.use('/reports',reportRouter);
mainRouter.use('/fundRaiserRouter',fundRaiserRouter);

export default mainRouter;