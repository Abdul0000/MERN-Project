
const Header = ({setInput,AddTask,Search}) => {
    
    const HandleInput = (e)=>{
        setInput(e.target.value)
    }

    return (
        <div className='header'>
            <div>
                <input className='input-header' onChange={HandleInput} placeholder='Add Todo'></input>
                <button className='button' onClick={AddTask} type='button' >Add</button>
                {/* <button className='button' type='button' onClick={Search}>Search</button> */}
            </div>
        </div>
    )
}

export default Header