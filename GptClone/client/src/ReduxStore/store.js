import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Features/AuthSlice.js'
import histoyReducer from './Features/historySlice.js'
export const store = configureStore({
    reducer:{
        auth:authReducer,
        history:histoyReducer
    }
})