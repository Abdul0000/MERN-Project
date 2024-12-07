import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const addExpenses = createAsyncThunk('/expenses',async({date,description,expenses,user},{rejectedWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:3001/expenses/add-expense',{date,description,expenses,user})
        if(data && data.success){
            alert("Add successfuly")
            return data
        }
        else{
            alert(data)
        }
    } catch (error) {
        rejectedWithValue(error)
    }
})

export const getExpenses = createAsyncThunk('/get-expenses',async({user},{rejectedWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:3001/expenses/get-expense',{user})
        if(data && data.success){
            // alert("get successfuly")
            return data
        }
        else{
            alert(data)
        }
    } catch (error) {
        rejectedWithValue(error)
    }
})

export const deleteExpenses = createAsyncThunk('/delete-expenses',async({ids},{rejectedWithValue})=>{
    try {
        const { data } = await axios.delete('http://localhost:3001/expenses/delete-expense', {
            data:  {ids:ids}
        });  
        if(data && data.success){
            return data
        }
        else{
            alert(data)
        }
    } catch (error) {
        rejectedWithValue(error)
    }
})