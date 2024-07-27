const {Router}=require('express');
const {UserController}=require('../controllers/UserController');

const router=Router()

router.get('/signup',(req,res)=>{
    res.status(201).json({"message":"Working Fine"})
});

module.exports=router;