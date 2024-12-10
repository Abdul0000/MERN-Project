import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './ReduxStore/store'


function App() {


  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
