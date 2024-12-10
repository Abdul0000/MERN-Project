import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const signup = createAsyncThunk('/signup',async({name,email,password,question,setSignupPopup,setPopup},{rejectedWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:3001/AuthRoutes/signup',{name,email,password,question})
        if(data && data.success){
            alert("Register successfuly")
            setSignupPopup(false)
            setPopup(true)
            return data
        }
        else{
            alert(data)
        }
    } catch (error) {
        rejectedWithValue(error)
    }
})

export const login = createAsyncThunk('/login',async({email,password,setPopup},{rejectedWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:3001/AuthRoutes/login',{email,password})
        if(data && data.success){
            localStorage.setItem("user",JSON.stringify(data.user))
            localStorage.setItem("token",JSON.stringify(data.token))
            alert("Login successfuly")
            setPopup(false)
            return ({...data})
        }
        else{
            alert(data)
        }
    } catch (error) {
        rejectedWithValue(error)
    }
})
//update password
export const forgetPassword = createAsyncThunk('/forgetPassword',async({email,question,password,navigate},{rejectedWithValue})=>{
    try {
        const {data} = await axios.post('http://localhost:3001/AuthRoutes/forget-password',{email,question,password})
        if(data && data.success){
            alert("Update successfuly")
            navigate('/login')
            // return ({...data})
        }
        else{
            alert(data)
        }
    } catch (error) {
        rejectedWithValue(error)
    }
})

//verifyUser
export const verifyUser = createAsyncThunk('/dashboard',async({token},{rejectWithValue})=>{
    try {
        const {data} = await axios.get('http://localhost:3001/AuthRoutes/verify',{
            headers:{
                Authorization:token||""
            }
        })
        if(data && data.success){
            // setProtectStatus()
            return data
        }
        else{
            alert(data)
        }
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
    }
})