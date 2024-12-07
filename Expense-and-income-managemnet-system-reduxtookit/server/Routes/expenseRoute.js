import express from 'express'
import { addExpenseController, getExpensesController, deleteExpenseController } from '../Controllers/ExpensesController.js'


const router = express.Router()

//route
router.post('/add-expense',addExpenseController)

//get
router.post('/get-expense',getExpensesController)
//delete
router.delete('/delete-expense',deleteExpenseController)

export default router

