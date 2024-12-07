import React from 'react'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import './App.css'
import LogIn from './components/LogIn'
import Signup from './components/Signup'
import ForgetPassword from './components/ForgetPassword'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './ReduxStore/store'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import DashBoardPrivate from './components/PrivateRoutes/DashBoardPrivate'
import Footer from './components/Footer'
import About from './components/About'
// import Header from './components/Header'
function App() {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path={'/signup'} element= {<Signup></Signup>}> </Route>
        <Route path={'/login'} element={<LogIn></LogIn>}></Route>
        <Route path={'/forgetpassword'} element={<ForgetPassword/>}></Route>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path='/dashboard' element={<DashBoardPrivate/>}>
          <Route path='' element={<Dashboard/>}></Route>
        </Route>
        <Route path={'/about'} element={<About/>}></Route>
      </Routes>
      
    <Footer/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
