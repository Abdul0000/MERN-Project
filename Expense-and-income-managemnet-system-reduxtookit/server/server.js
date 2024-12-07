import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose';
import colors from "colors";
import cors from "cors";
import authRoute from "./Routes/authRoutes.js"
import expenseRoute from './Routes/expenseRoute.js'

const app = express()

mongoose.connect('mongodb://localhost:27017/expense_management')

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/AuthRoutes',authRoute)
app.use('/expenses',expenseRoute)

app.listen(3001,()=>{
    console.log("server is running")
})