import Expense from "../Models/ExpenseModal.js"

export const addExpenseController = async(req,res)=>{
    try {
        const {date,description,expenses} = req.body
        if (!date || !description || !expenses){
            return res.send("Required all fields")
        }
        let income = 0
        let expense = 0
        if(Number(expenses) >= 0){
            income = Number(expenses)
        }
        else
        {
            expense = Number(expenses)
        }
        const AddExpenses = await Expense.create({...req.body,income:income,expense:expense})
        if (AddExpenses){
            return res.status(201).send({
                success:true,
                message:"Add Expenses/income Successfully"
            })
        }                          
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to Add Expenses/income",
            error
        })
    }
}


export const getExpensesController = async(req,res)=>{
    try {
        const {user} = req.body
        const GetExpenses = await Expense.find({user})
        if (GetExpenses){
            return res.status(201).send({
                success:true,
                message:"Get Expenses/income Successfully",
                GetExpenses
            })
        }                          
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to Add Expenses/income",
            error
        })
    }
}

export const deleteExpenseController = async(req,res)=>{
    try {
        const {ids} = req.body
        if (!Array.isArray(ids)) { 
            return res.status(400).json({ message: 'Invalid input, expected an array of IDs' });
        } 
        const result = await Expense.deleteMany({ _id: { $in: ids } });
        if (result){
            return res.status(201).send({
                success:true,
                message:"Delete Expenses/income Successfully",
            })
        }                          
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Fail to delete Expenses/income",
            error
        })
    }
}