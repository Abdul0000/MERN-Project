import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../reduxStore/slices/todoSide"
import { useState } from "react"
const Header = ({AddTask,Search}) => {

    const [input,setInput] = useState('')
    const HandleInput = (e)=>{
        setInput(e.target.value)
    }
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <div>
                <input className='input-header' onChange={HandleInput} placeholder='Add Todo'></input>
                <button className='button' onClick={()=>{dispatch(addTodo(input))}} type='button' >Add</button>
                {/* <button className='button' type='button' onClick={Search}>Search</button> */}
            </div>
        </div>
    )
}

export default Header