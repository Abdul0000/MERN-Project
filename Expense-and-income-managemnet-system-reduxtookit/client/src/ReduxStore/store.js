import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./feature/AuthSlice.js"
import expensesReducer from './feature/ExpensesSlice.js'
const store = configureStore(
    {
    reducer:{
        auth:authReducer,
        expenses:expensesReducer,
    }
    }
)
export default store