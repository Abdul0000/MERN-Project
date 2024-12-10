import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import cors from "cors";
import authRoute from "./Routes/authRoutes.js"
import historyRoute from './Routes/historyRoutes.js'
const app = express()

mongoose.connect('mongodb://localhost:27017/GPT')

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/AuthRoutes',authRoute)
//history 
app.use('/history',historyRoute)

app.listen(3001,()=>{
    console.log("server is running")
})