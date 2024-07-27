const {Router}=require('express');
const {UserRouter}=require('./UserRoutes');
const router=Router();

router.use('/user',UserRouter);



module.export=router;