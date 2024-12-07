import { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import store from '../ReduxStore/store';
import { signup } from '../ReduxStore/feature/AuthActions.js';
import Header from './Header';
const Signup = () => {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const gameRef = useRef(null);
  const navigate = useNavigate
  const handleSignup = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const question = gameRef.current.value;
    store.dispatch(signup({name,email,password,question,navigate}))
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    gameRef.current.value = '';
  };

  return (
    <div className="flex mt-6 justify-center h-screen">
        <div>
            <h2 className="text-4xl font-semibold mb-6 text-gray-700 "><center>Sign Up</center></h2>
            <div className="flex flex-col space-evenly w-[500px] p-8 h-[560px] border border-gray-300 text-gray-800 gap-8 rounded-md shadow-lg bg-white">
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
              <Link to={ '/login'}>
              <button className="block w-full h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white"
              type="button">
                Login
              </button>
              </Link>
            </div>
        </div>
    </div> 
  )
}

export default Signup