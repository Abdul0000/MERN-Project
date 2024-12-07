import { useState } from "react";
import MealCard from "./MealCard";

const Header = () => {
    const [input,setInput] = useState()
    const handleOnChange = (e) => {
        setInput(e.target.value)
    }

    const [apiData,setApiData] = useState()
    const getData = async () =>{
        const get = await fetch(`Https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
        const data = await(get.json()) 
        setApiData(data.meals)

    }
    console.log(apiData);
    
  return (
    <>
    <div className='header'>
        <input type="text" className="input" onChange={handleOnChange}></input>
        <button type='button' className="button" onClick={getData}>Search</button>
    </div>
    <div>
    <MealCard cardData={apiData}/>
    </div>
    </>
    
  )
}

export default Header
