import { createSlice } from "@reduxjs/toolkit";
import { addExpenses, deleteExpenses, getExpenses } from "./ExpensesActions.js";

export const ExpensesSlice = createSlice({
    name: "expenses",
    initialState: {
        loading: false,
        error: null,
        expenses: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Add Expenses
            .addCase(addExpenses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addExpenses.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(addExpenses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            // Get Expenses
            .addCase(getExpenses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getExpenses.fulfilled, (state, action) => {
                state.loading = false;
                state.expenses = action.payload ? action.payload.GetExpenses:[];
                // console.log(action.payload);
            })
            .addCase(getExpenses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
            //delete expenses
            .addCase(deleteExpenses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteExpenses.fulfilled, (state) => {
                state.loading = false;
                // console.log(action.payload);
            })
            .addCase(deleteExpenses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});

export default ExpensesSlice.reducer;
