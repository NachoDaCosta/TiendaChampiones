const express=require('express');
const router=express.Router();
const usuarios=[];
const bcrypt=require('bcrypt')
//const jwt=require('jsonwebtoken')
//const {verifyToken,TOKEN_SECRET}=require('./middlewares/validate-jwt');



router.post('/register',async (req,res)=>{
    const salt=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password,salt);

    const newUser={
        email: req.body.email,
        password: password
    }
    usuarios.push(newUser);
    res.send({success: true, newUser,usuarios});
})

module.exports=router;