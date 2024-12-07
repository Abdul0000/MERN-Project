
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import {Routes,Route} from 'react-router-dom'
import MealRecipe from './components/MealRecipe';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header/>}></Route>
      <Route path='/:mealid' element={<MealRecipe/>}></Route>
    </Routes>
  )
}

export default App
