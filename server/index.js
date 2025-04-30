import express, { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
import connectMongo from "./config/db.js";
import cors from "cors";
import userRouter from '../server/routers/sample_router.js'
import cookieParser from "cookie-parser";
// const cors = require('cors');



const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use("/", userRouter);

app.use(cookieParser())
app.listen(process.env.PORT, () => {
  connectMongo();
  console.log("server startes..... om port ${}'", process.env.PORT);
});
