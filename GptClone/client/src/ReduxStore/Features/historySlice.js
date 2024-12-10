import { createSlice } from "@reduxjs/toolkit";
import { deleteHistory, getHistory } from "../Actions/historyActions.js";

export const historySlice = createSlice({
    name:"history",
    initialState:{
        loading:false,
        error:null,
        dbHistory:[],
        fullHistroy:[],
        responses:[],
        check:false
    },
    reducers:{
        setHistory:(state,action)=>{
            state.fullHistroy = action.payload
            // console.log(action.payload)
        },
        setResponses: (state, action) => {
            state.responses.push({
              prompt: action.payload.prompt,
              response: action.payload.result,
            });
        },
        clearResponses:(state)=>{
            state.responses = []
        },
        clearDbHistory:(state)=>{
            state.check = false
        },
        setCheck:(state)=>{
            state.check = true
        }

    }
    ,
    extraReducers:(builder)=>{
        builder
        .addCase(getHistory.pending, (state) =>{
            state.loading = false,
            state.error = null
        })
        .addCase(getHistory.fulfilled,(state,action)=>{
            state.loading=false
            state.dbHistory = action.payload.history
            // console.log("action history",action.payload)
        })
        .addCase(getHistory.rejected, (state) => {
            state.error = true
            state.protectStatus = false
            state.loading=false
        })
        //delete history
        .addCase(deleteHistory.pending, (state) =>{
            state.loading = false,
            state.error = null
        })
        .addCase(deleteHistory.fulfilled,(state)=>{
            state.loading=false
            state.dbHistory = []
        })
        .addCase(deleteHistory.rejected, (state) => {
            state.error = true
            state.loading=false
        })
    }
})

export const {setHistory,setResponses,clearDbHistory,setCheck,clearResponses} = historySlice.actions
export default historySlice.reducer