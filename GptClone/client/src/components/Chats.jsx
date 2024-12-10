import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import LogIn from "./LogIn";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import { useSelector } from "react-redux";
import { getLogout } from "../ReduxStore/Features/AuthSlice.js";
import { store } from "../ReduxStore/store.js";
import { setResponses } from "../ReduxStore/Features/historySlice.js";

const Chats = () => {
    const isLogin = useSelector(state => state.auth.user)
    const responses = useSelector(state => state.history.responses)
    const dbHistory = useSelector(state => state.history.fullHistroy)
    const check = useSelector(state => state.history.check)
    // console.log(responses)
    const email = isLogin? isLogin.email:''
    const userInputRef = useRef();
    const chatEndRef = useRef(null);
    const [popup,setPopup] = useState(false)
    const [signupPopup,setSignupPopup] = useState(false)
    const [forgetPopup,setForgetPopup] = useState(false)
    
    // const [responses, setResponses] = useState([]);
    const genAI = new GoogleGenerativeAI("AIzaSyAoJRj0bzp6AoVHS7ppz7IB_VW2aq7CtpY");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const getResponseFromAI = async () => {
    const prompt = userInputRef.current.value.trim();
    if (prompt) {
        const result = await model.generateContent(`${prompt} \`\`\`Correct and relevant to prompt not too long\`\`\`context`);
        if (result) {
            // store.dispatch(setCheck())
            store.dispatch(setResponses({prompt,result:result.response.text()}));
        }
    }
    };


    let finalData = responses
    console.log(check)
    if(dbHistory && check){
        finalData = dbHistory
    }
    
    const handleOnClick = () => {
    getResponseFromAI();
    userInputRef.current.value = '';
    };

    useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [responses]);
    
    const handOnLogin = ()=>{
    setPopup(true)
    }
    const handOnLogout = ()=>{
    localStorage.clear()
    store.dispatch(getLogout())
    }

  return (
    <div className="bg-slate-600 flex flex-col items-center w-full h-screen p-2 pb-6">
    
      <header className="m-6 flex items-baseline justify-between w-11/12">
        <h1 className="text-4xl font-semibold text-gray-100">ChatGPT</h1>
        
        {
        isLogin ?<div className="flex items-center justify-center gap-4 -pt-10">{email&&<p className="text-gray-100">{email}</p>}
        <button onClick={handOnLogout} className="text-xl bg-white hover:bg-gray-200 text-gray-500 font-semibold w-24 h-11 rounded">
          Log Out
        </button></div>:
        <button onClick={handOnLogin} className="text-xl bg-white hover:bg-gray-200 text-gray-500 font-semibold w-24 h-11 rounded">
          Login
        </button>
        }
       
      </header>
      {/* <div>{email&&<p className="text-xl text-gray-100 -mt-[100px] ml-[1250px] ">{email}</p>}</div>  */}
      
      <main className="flex flex-col flex-grow w-full max-w-6xl bg-slate-700 rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col flex-grow overflow-y-auto p-4 space-y-6">
          {finalData.length > 0 ? (
            finalData.map((response, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl font-mono font-bold text-red-600 bg-red-200 px-4 py-1 rounded-full">
                    You
                  </span>
                  <p className="p-2 rounded-md text-red-500 bg-red-50 flex-grow">
                    {response.prompt}
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl font-mono font-bold text-pink-500 bg-pink-200 px-4 py-1 rounded-full">
                    Response
                  </span>
                  <p className="p-2 rounded-md text-pink-600 bg-pink-50 flex-grow">
                    {response.response}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center text-4xl font-semibold text-gray-100 h-full">
              <span className="text-red-300">How</span> <p className="ml-2">can I help you !!!</p>
            </div>
          )}
          <div ref={chatEndRef}></div>
        </div>
      </main>
      <footer className="w-full max-w-6xl flex justify-center items-center mt-4 space-x-4">
        <div className="relative w-full max-w-4xl">
          <input
            ref={userInputRef}
            className="bg-gray-100 border shadow-lg border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-300 px-4 py-2 w-full h-14 pl-12"
            type="text"
            placeholder="Ask me..."
          />
          <BsSearch
            onClick={handleOnClick}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        </div>
      </footer>
      {popup ? <LogIn setPopup={setPopup} setSignupPopup={setSignupPopup} setForgetPopup={setForgetPopup}/>:''}
      {forgetPopup ? <ForgetPassword setPopup={setPopup} setSignupPopup={setSignupPopup} setForgetPopup={setForgetPopup}/>:''}
      {signupPopup ? <Signup setSignupPopup={setSignupPopup} setPopup={setPopup}/>:''}
    </div>
  );
};

export default Chats;
