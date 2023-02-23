require('dotenv').config();
const express=require('express');
const router=express.Router();
const asyncHandler = require('express-async-handler')
//const users=require('./user_schema');
const jwt = require('jsonwebtoken');
const bcrypt= require('bcryptjs');
const userModel=require('./user_model');

// router.get("/users/seed",async(req,res)=>{
//     const userCount= await userModel.countDocuments();
//     if(userCount>0){
//         res.send("Seed is already done!");
//         return;
//     }
//     await userModel.create(u.users);
//     res.send("Seed is done!");
// })

// register user
router.post('/users',async (req,res)=>{
    try {
        const newUser=req.body;
        console.log('newUser',newUser);
        const user= await userModel.findOne({email:newUser.email});
        if(user){
            res.status(400).send('User is already exist, please login!');
            return;
        }
        const encryptedPassword = await bcrypt.hash(newUser.password,10);
        newUser.password=encryptedPassword;
        //newUser.isAdmin=false;
        console.log("final",newUser)
        const dbUser = await userModel.create(newUser);
        res.send(generateTokenResponse(dbUser));

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})


// login user
router.post('/userSignIn',asyncHandler(async (req,res)=>{
    try {
        console.log('before login-> ',req.body);
        let {email,password}=req.body;

        let user= await userModel.findOne({email});
        console.log('user' , user);
        const decryptedPassword = await bcrypt.compare(req.body.password, user.password, function(err, result) {
          console.log('err',err);
          console.log('result',result);
        })



        if(user){
            res.json(generateTokenResponse(user.toObject()))
        }
        else{
            res.status(400).send("credentials is not valid");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}))

// generate login token
const generateTokenResponse = (user)=>{
    payload={
        id:user.id,
        email:user.email
    }
    const token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"30d"});
    user.token=token;
    return user;
}

// get user
// router.get('/profile',checkauth,(req,res)=>{
//     const userId= req.userData.userId;
//     // console.log('userId',userId);
//     users.findById(userId).exec().then((result)=>{
//         res.json({success:true,data:result});
//         // console.log('result',result);
//     }).catch((err)=>{
//         res.json({success:false,message:"Server error"})
//     })
// })

module.exports=router;
