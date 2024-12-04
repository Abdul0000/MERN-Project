import { useDispatch, useSelector } from "react-redux"
import { removeTodo,markCompleted,edit,save} from "../reduxStore/slices/todoSide"
import { useRef } from "react"
const TodoItem = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    const editInput = useRef()
  return (
    <>
        {todos && todos.map((todo) => (<div key={todo.id} className='item'>
            <p className='task' style={{textDecoration: todo.completed ? "line-through":"none",color:todo.completed ? "red": "#000"}}>  {todo.edit ? <input ref={editInput} className='task-input'></input> : todo.text}</p>
            <button type='button' className="button-edit" onClick={()=>dispatch(edit(todo.id))}>Edit</button>
            <button type='button' className="button-save" onClick={() => !todo.completed && dispatch(save({ text: editInput.current.value, id: todo.id }))} >Save</button>
            <button type='button' className='button-completed' onClick={() => dispatch(markCompleted(todo.id))}>Mark Completed</button>
            <button type='button' onClick={()=>(dispatch(removeTodo(todo.id)))} className='button-delete'>Delete</button>
          
            
        </div>))}
        
    </>
    
  )
}

export default TodoItem
