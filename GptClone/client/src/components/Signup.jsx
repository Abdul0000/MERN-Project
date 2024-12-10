import { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { store } from '../ReduxStore/store';
import { signup } from '../ReduxStore/Actions/AuthActions';
// import store from '../ReduxStore/store';
// import { signup } from '../ReduxStore/feature/AuthActions.js';

const Signup = ({setSignupPopup,setPopup}) => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const gameRef = useRef(null);
 
  const handleSignup = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const question = gameRef.current.value;
    store.dispatch(signup({name,email,password,question,setSignupPopup,setPopup}))
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    gameRef.current.value = '';
  };
  const onSignupClose = ()=>{
    setSignupPopup(false)
  }
  const onLoginOpen = ()=>{
    setPopup(true)
    setSignupPopup(false)
  }
  return (
    <div className="fixed bg-black inset-0 backdrop-blur-sm bg-opacity-25 flex items-center justify-center" >
        <div className="flex flex-col space-evenly w-[500px] p-8 h-[570px] border border-gray-300 text-gray-800 gap-6 rounded-md shadow-lg bg-white">
        <button onClick={onSignupClose} className="text-xl -mt-8 -ml-6 text-black place-self-start -mt-" type="button">X</button>   
            <h2 className="text-4xl font-semibold -mt-8 text-gray-700 "><center>Sign Up</center></h2>
              <input ref={nameRef} className="h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none"
              type="text" placeholder="Name" required/>
              <input ref={emailRef} className="h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none"
              type="email" placeholder="Email" required/>
              <input ref={passwordRef} className="h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none"
              type="password" placeholder="Password" required/>
              <input ref={gameRef} className="h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none"
              type="text" placeholder="What is your favourite game" required/>
              <button className="h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white"
              type="button" onClick={handleSignup}>
                Sign up
              </button>
              <button onClick={onLoginOpen} className="block w-full h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white"
              type="button">
                Login
              </button>
            </div>
    </div> 
  )
}

export default Signup