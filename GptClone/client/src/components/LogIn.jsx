import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../ReduxStore/store';
import { login } from '../ReduxStore/Actions/AuthActions.js';

const LogIn = ({setPopup,setSignupPopup,setForgetPopup}) => {
 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () =>{
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    store.dispatch(login({email,password,setPopup}))
    emailRef.current.value = '';
    passwordRef.current.value = '';
}
  const HandelOnCLick = ()=>{
    setPopup(false)
    setSignupPopup(false)
  }
  const HandelOnCLickSignup = ()=>{
    setSignupPopup(true)
    setPopup(false)
  }
  const onForgetOpen = ()=>{
    setPopup(false)
    setSignupPopup(false)
    setForgetPopup(true)
  }
  return (
    <div className="fixed bg-black inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
    <div className='flex flex-col space-evenly rounded-md h-[500px] w-[500px] p-2 bg-white text-gray-800 gap-8'>
        <button onClick={HandelOnCLick} className="text-xl text-black place-self-start -mt-2" type="button">X</button>   
        <h2 className="text-4xl font-semibold text-gray-700 -mt-10"><center>Log In</center></h2>
        <input ref={emailRef} className=" h-[55px] mr-6 ml-6 px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="email" placeholder="Email" required></input>
        <input ref={passwordRef} className=" h-[55px] px-4 ml-6 mr-6 text-xl border border-gray-600 rounded-[2px] outline-none" type="password" placeholder="Password" required></input>
        <p onClick={onForgetOpen} className='text-xl ml-6 cursor-pointer'>Forget Password</p>
        <button onClick={handleLogin} className=" h-[55px] ml-6 mr-6 px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Login</button>
        <button onClick={HandelOnCLickSignup} className="ml-6 mr-6 h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Sign Up </button>
        </div>
    </div> 
  )
}

export default LogIn