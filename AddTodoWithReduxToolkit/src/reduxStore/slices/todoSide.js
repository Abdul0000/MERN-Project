import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSLice = createSlice({
    name: 'todo',
    initialState:{
        todos:[{id: nanoid(),text: "hello World",completed: false,edit:false}],
    },

    reducers:{
        addTodo : (state,action)=>{
            state.todos.push({
                id:nanoid(),
                text:action.payload
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => (!todo.completed ? action.payload !== todo.id: todo))
            
        },
        markCompleted: (state,action) => {
            state.todos = state.todos.map((todo) => (action.payload === todo.id ? {...todo,completed:true} :todo))
        },
        edit: (state,action) => {
            state.todos = state.todos.map((todo) => (todo.id === action.payload && !todo.completed ? {...todo,edit:true} :todo))
        },
        save: (state,action) => {
            const {text , id} = action.payload
            const todo = state.todos.find((todo) => (todo.id === id))
            if (todo){
                todo.edit=false
                todo.text=text
            }
        }

    }
})                                       

export const {addTodo,removeTodo,markCompleted,edit,save} = todoSLice.actions
export default todoSLice.reducer