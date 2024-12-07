import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import store from '../ReduxStore/store';
import { login } from '../ReduxStore/feature/AuthActions.js';
const LogIn = () => {
  // const auth = useSelector(state => state.auth.user)

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate()
  const handleLogin = () =>{
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    store.dispatch(login({email,password,navigate}))
    emailRef.current.value = '';
    passwordRef.current.value = '';
}

  return (
    <div className="flex mt-6 justify-center h-screen ">
        <div>
            <h2 className="text-4xl font-semibold mb-8 text-gray-700 "><center>Log In</center></h2>
            <div className="flex flex-col space-evenly w-[500px] p-12 h-[500px] border border-gray-300 text-gray-800 gap-8 rounded-md shadow-lg bg-white">
                <input ref={emailRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="email" placeholder="Email" required></input>
                <input ref={passwordRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="password" placeholder="Password" required></input>
                <Link to={'/forgetpassword'} className='text-xl'>Forget Password</Link>
                <button onClick={handleLogin} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Login</button>
                <Link to={'/signup'}><button className="block w-full h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Sign Up </button></Link>
            </div>
        </div>
    </div> 
  )
}

export default LogIn