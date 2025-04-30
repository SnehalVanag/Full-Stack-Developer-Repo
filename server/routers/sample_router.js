import { Router } from "express";
import {  UserSingUp,Login ,Logout} from "../controller/auth.js";
import express from 'express'


const userRouter=express(Router())

userRouter.post('/singup',UserSingUp)
userRouter.post('/login',Login)
userRouter.post('/logout',Logout)

export default userRouter