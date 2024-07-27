import { Router } from "express";
import reportController from "../controllers/report.controller.js";

const reportRouter=Router();

reportRouter.get('/getReport', reportController.getReports); 
reportRouter.post('/putReport', reportController.putReport);
reportRouter.delete('/deleteReport', reportController.deleteReport);
reportRouter.post('/analyzeReport', reportController.analyzeReport);

export default reportRouter;