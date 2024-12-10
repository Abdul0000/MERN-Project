import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addHistory = createAsyncThunk('/history',async({history,userId},{rejectWithValue})=>{
    try {
        if(history,userId){
            const {data} = await axios.post('http://localhost:3001/history/add-history',{history,userId})
            // if(data.success){
            //     consoledata.message)
            // }
        }
        
    } catch (error) {
        return rejectWithValue(error.response?.data || "error in api");
    }

})

export const getHistory = createAsyncThunk('/history',async({userId},{rejectWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:3001/history/get-history',{userId})
        if(data.success){
            return {...data}
        }
    } catch (error) {
        return rejectWithValue(error.response?.data || "error in api");
    }

})
//delete history
export const deleteHistory = createAsyncThunk('/delete-history',async({userId},{rejectWithValue})=>{
    try {
        if(userId){
        const {data} = await axios.delete('http://localhost:3001/history/delete-history',{data:{userId}})
        if(data.success){
            return {...data}
        }
        }
        
    } catch (error) {
        return rejectWithValue(error.response?.data || "error in api");
    }

})