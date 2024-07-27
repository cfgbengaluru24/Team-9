import { Router } from "express";
import reportController from "../controllers/report.controller.js";

const reportRouter=Router();

reportRouter.get('/', reportController.getReports); 
reportRouter.post('/putReport', reportController.putReport);

export default reportRouter;