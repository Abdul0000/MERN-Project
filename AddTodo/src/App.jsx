
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header'
import Item from './components/Item'
import SideBar from './components/SideBar'
function App() {  
  const [todos,setTodo] = useState([])
  const [input,setInput] = useState('')
  // const [filteredTodos, setFilteredTodos] = useState([]);
  const AddTask = () => {
    if (input !== ''){
      const newTask = { id: Date.now(), text: input, completed:false}; 
      setTodo([...todos,newTask])
    }
  }
  const deleteTask = (id) => {
    const newTodos=todos.filter((todo) => (todo.id !==id))
    setTodo(newTodos)
  }
  const completedTask = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodo(newTodos);
  };
  const Search = () => {
    const serchedTodo = todos.filter((todo)=> todo.text.includes(input));
    setTodo(serchedTodo);
  }
  return (
    <>
    <div className='todo-app'>
      <SideBar/>
      <div className="right-content">
      <Header AddTask={AddTask} setInput={setInput} Search={Search}/>
      <Item todos={todos} deleteTask={deleteTask} completedTask={completedTask}/>
      </div>
    </div>
    </>
  )
}

export default App
