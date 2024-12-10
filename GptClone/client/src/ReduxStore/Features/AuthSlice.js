import { createSlice } from "@reduxjs/toolkit";
import { login, signup, verifyUser } from "../Actions/AuthActions.js";

export const AuthSlice = createSlice({
    name:"Auth",
    initialState:{
        loading:false,
        error:null,
        user:JSON.parse(localStorage.getItem("user"))|| "" ,
        token: JSON.parse(localStorage.getItem("token")) ||"" ,
        protectStatus:false,
        history:[]
    },
    reducers:{
        getLogout: (state)=>{
            state.user = null
            state.token = null
            state.protectStatus = false
            state.isLogin = false
        },
       
        setProtectStatus: (state)=>{
            state.protectStatus = true
        }
    },

    extraReducers: (builder)=>{
        builder
        //register
        .addCase(signup.pending, (state) =>{
            state.loading = false,
            state.error = null
        })
        .addCase(signup.fulfilled,(state)=>{
            state.loading=false
        })
        .addCase(signup.rejected, (state) => {
            state.error = true
            state.loading=false
        })
        //login
        .addCase(login.pending, (state) =>{
            state.loading = false,
            state.error = null
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.loading=false
            state.user = action.payload.user ? action.payload.user:null
            state.protectStatus = true;
            state.isLogin = true
        })
        .addCase(login.rejected, (state) => {
            state.error = true
            state.protectStatus = false
            state.loading=false
        })

       
       .addCase(verifyUser.pending, (state) =>{
            state.loading = false,
            state.error = null
        })
        .addCase(verifyUser.fulfilled,(state,action)=>{
            state.loading=false
            state.protectStatus = action.payload.success ? true:false                     
        })
        .addCase(verifyUser.rejected, (state) => {
            state.error = true
            state.protectStatus = false
            state.loading=false
        })
    }
})

export const {getLogout} = AuthSlice.actions
export default AuthSlice.reducer
