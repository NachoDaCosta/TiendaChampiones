const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const db = require('../models/index');
const jwt=require('jsonwebtoken')
const {verifyToken,TOKEN_SECRET}=require('../middlewares/validate-jwt');


router.post('/register',async (req,res)=>{
    const salt=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password,salt);
    const User=db.Users
    const newUser={
        email: req.body.email,
        password: password
    }
    await User.create(newUser)
    .then((data)=>{res.send({success: true, newUser})})
    .catch(err => {res.status(500).send({message: err.message})})
});


/*
router.post('/login',async(req,res)=>{
    const User=db.Users
    const user=User.find((u)=>u.email===req.body.email);
    if (!user){
        return res.status(400).send({error:"Usuario no encontrado"})
    }
    const validPassword=await bcrypt.compare(req.body.password,user.password)
    if(!validPassword){
        return res.status(400).send({error:'Contraseña no valida'})
    }
    //creacion de jwt
    const token=jwt.sign({
        email:user.email,
        id:user.id
    },TOKEN_SECRET)
    res.send({error: null,data:'Login exitoso',token});
});
*/

module.exports=router;