
import dotenv from "dotenv";
dotenv.config();
import express from"express";
import {createServer} from "node:http";
import { Server } from "socket.io";

import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./controllers/socketManager.js";

const app=express();
const server=createServer(app);
const io=connectToSocket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=process.env.PORT || 8080;
const url=process.env.MONGO_URL;
import userRoutes from "./routes/usersRoutes.js"


app.use("/",userRoutes);
server.listen(port,()=>{
    console.log("port is listening")
});
mongoose.connect(url)
.then((res)=>{
    console.log("mongoDb is connected");
})
.catch((err)=>{
    console.log("fails to connect to mongoDb");
});