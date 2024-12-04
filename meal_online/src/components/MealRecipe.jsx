import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"


const MealRecipe = () => {
    const {mealid} =  useParams();
    // console.log(mealid)
    const [mealInfo,setMealInfo] = useState()
    
    const getMealInfo = async () => {
        const get = await fetch(`Https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const data = await (get.json())
        setMealInfo(data.meals[0]["strInstructions"])
    }
    useEffect(()=>{getMealInfo()},[])
    console.log(mealInfo)
  return (
        <div className="meal-info">
            {<p>
                {mealInfo}
            </p>}
        </div>
  )
}

export default MealRecipe
