import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slices/todoSide';

export const store = configureStore({
    reducer: {
        todos: todoReducer // The key here (`todos`) matches the state selector
    }
});
