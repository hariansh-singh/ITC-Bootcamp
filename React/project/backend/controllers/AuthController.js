const userModel=require('../models/UserModel');
//const bcrypt = require('bcrypt');
var sha1 = require('js-sha1');
const jwt=require("jsonwebtoken");
const SecretKey="asd!@#567ASDDDD"
//const saltRounds = 10;
const loginUser=async (req,res)=>{
   let email=req.body.email;
   let password=req.body.password;
   console.log(req.body)
   try{
   let user=await userModel.findOne({email:email});
   console.log(user)
   let dbpass=user.password;
//    if(bcrypt.compareSync(password, dbpass)){
    if(dbpass===sha1(password)){
      const userData={
        email:email,
        isAdmin:user.role=="admin"?true:false
      };
      const token=jwt.sign(userData,SecretKey,{expiresIn:"2h"})
    res.json({"err":0,"msg":"Login Successfull","token":token});
       }
       else{
        res.json({"err":1,"msg":"Enter correct email or password"});
       }
   }
   catch(err){
    res.json({"err":1,"msg":"Enter correct email or password"});
   }
   
}
const registerUser=async (req,res)=>{
    let email=req.body.email;
    let password=req.body.password;
    //let hashPassword = bcrypt.hashSync(password, saltRounds);
    let hashPassword=sha1(password);
    let firstName=req.body.firstName;
    let lastName=req.body.lastName;
    let age=req.body.age;
    try{
        let regData=new userModel({email:email,password:hashPassword,firstName:firstName,lastName:lastName,age:age});
        await regData.save();
        res.json({"err":0,"msg":"User Registered"})
    }
    catch(err){
        res.json({"err":1,"msg":"Something wrong or already registered"});
    }
    
}
module.exports={loginUser,registerUser};