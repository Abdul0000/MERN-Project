import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import InputCalculator from './components/Input'
import Buttons from './components/ButtonsContainer';
import { useState } from 'react';
function App() {
  let [calButtons,setButtonsValue] = useState('');
  const onClickButton = (btnText)=>{
    if (btnText === 'C'){
      setButtonsValue('')
    }
    else if (btnText === '='){
      const result = eval(calButtons);
      setButtonsValue(result)
    }
    else{
      const newValue = calButtons + btnText;
      setButtonsValue(newValue);
    }
  }
  return (
      <div className='calculator'>
      <InputCalculator currentVal = {calButtons}/>
      <Buttons onButtonClick = {onClickButton}/>
      </div>

  )
}

export default App
