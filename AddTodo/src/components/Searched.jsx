

const Searched = ({todos,deleteTask,completedTask}) => {
  return (
    <>
      {todos && todos.map((todo) => (<div key={todo.id} className='item'>
            <p className='task' style={{textDecoration: todo.completed ? "line-through":"none",color:todo.completed ? "red": "#000"}}>{todo.text}</p>
            <button type='button' className='button-completed' onClick={() => completedTask(todo.id)}>Mark Completed</button>
            <button type='button' onClick={()=>(deleteTask(todo.id))} className='button-delete'>Delete</button>
        </div>))}
    </>
  )
}

export default Searched
