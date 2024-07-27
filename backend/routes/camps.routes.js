import { Router } from "express";
import campsController from "../controllers/camps.controller.js";

const campsRouter=Router();

campsRouter.get('/getAllCampaings',campsController.getAll);
campsRouter.post('/reduceCount',campsController.reduceCount);

export default campsRouter;