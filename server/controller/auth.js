import SingUp from "../models/singup._model.js";
import bcrypt from "bcrypt";
import generateToken from "../config/token.js";

export const UserSingUp = async (req, res) => {
  try {
    let { name, age, email, password } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);

    if (name && age && email && password) {
      let user = await SingUp.create({
        name,
        age,
        email,
        password: hashedpassword,
      });
      console.log("user is", user);
      let token = generateToken(user._id);

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENVIROMENT,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    } else {
      res.status(401).json({ message: "please enter all details" });
    }
    res.status(201).json({
        message: "created sucessful",
        name: name,
        password: hashedpassword,
      });
  } catch (error) {
    res.status(500).json({ message: "user not created" });
  }
};


export const Login = async (req,res)=>{
 try{
   let {email,password}=req.body
   if(!email || !password){
      console.log("fill all details")
      res.status(400).json({message:"fill all details"})
   }

   const existUser= await SingUp.findOne({email})
   if(!existUser){
      res.status(400).json({message:"user not exist"})
   }

   let match=await bcrypt.compare(password,existUser.password)
   if(!match){
      res.status(400).json({message:"incorrect password"})
   }

   let token = generateToken(existUser._id);

   res.cookie("token", token, {
     httpOnly: true,
     secure: process.env.NODE_ENVIROMENT,
     maxAge: 19 * 24 * 60 * 60 * 1000,
   });


   res.status(200).json({
      message: "login sucessful",
      user:{
         id:existUser._id,
         name:existUser.name,
         email:existUser.email
      }
     
    });
 }
 catch(error){
   console.log(error)
   res.status(500).json({message:"login unsucessful",error:error})
 }
}

export const Logout = async (req,res)=>{
   try{
      res.clearCookie("token")
      res.status(200).json({message:"logout sucessfully"})
   }catch(error){
      res.status(500).json({message:"not able to logout sucessfully"})
   }
}
