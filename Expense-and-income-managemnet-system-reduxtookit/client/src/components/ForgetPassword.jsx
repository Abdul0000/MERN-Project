import { useRef } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import store from '../ReduxStore/store';
import { forgetPassword } from '../ReduxStore/feature/AuthActions.js';
const ForgetPassword = ()=>{

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const gameRef = useRef(null);
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const question = gameRef.current.value;
        store.dispatch(forgetPassword({email,question,password,navigate}))

        emailRef.current.value = ''
        passwordRef.current.value = ''
        gameRef.current.value = ''
    };

    return (
        <div className="flex items-center justify-center h-screen">
        <div>
            <h2 className="text-4xl font-semibold mb-6 text-gray-700 "><center>Reset Password</center></h2>
            <div className="flex flex-col space-evenly w-[500px] p-8 h-[490px] border border-gray-300 text-gray-800 gap-8 rounded-md shadow-lg bg-white">
                <input ref={emailRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="email" placeholder="Email"></input>
                <input ref={passwordRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="password" placeholder="New Password"></input>
                <input ref={gameRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="text" placeholder="What is your favourate game"></input>
                <button onClick={handleClick} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Update</button>
                <Link to={'/login'}><button className="block w-full h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Login</button></Link>
            </div>
        </div>
    </div> 
    )
}
export default ForgetPassword