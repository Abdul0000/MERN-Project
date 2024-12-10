import { TfiAlignJustify } from "react-icons/tfi";
import { RiChatNewFill } from "react-icons/ri";
import { CiChat1 } from "react-icons/ci";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FcDeleteDatabase } from "react-icons/fc";
import { useEffect, useState } from "react";
import { store } from "../ReduxStore/store";
import { useSelector } from "react-redux";
import { addHistory, deleteHistory, getHistory } from "../ReduxStore/Actions/historyActions.js";
import { clearDbHistory, clearResponses, setCheck, setHistory } from "../ReduxStore/Features/historySlice.js";

const SideBar = () => {

    const [toggle,setToggle] = useState(false)
    const responses = useSelector(state => state.history.responses)
    let dbHistory = useSelector(state => state.history.dbHistory)
    let userId = useSelector(state => state.auth.user)
    userId = userId ? userId._id:''

    // Function to extract prompts and responses
    function extractPromptsAndResponses(dbHistory) {
        const data =dbHistory && dbHistory.map((db)=>{
            const history = db.history && db.history.map((ndb)=>{
                return ndb.prompt
            })

            return history && history[0]
        })
        return data

    }
    
    // Call the function
    const extractedData = extractPromptsAndResponses(dbHistory);
    const HandleOnRecent = (prompt)=>{
        store.dispatch(setCheck())
        const list = []
        const matched =dbHistory ? dbHistory.map((entry)=>{
            return entry.history.find((i)=>{
                if(i.prompt === prompt){
                    return list.push(entry.history)
                }
            })
        }):''
        if(list){
            store.dispatch(setHistory(list[0]))
        }
        
        // console.log(list[0])
    }
    const HandleOnclickToggle = ()=>{
        setToggle(!toggle)
    }
    const handleOnNewChat = ()=>{
        store.dispatch(addHistory({history:responses,userId}))
        store.dispatch(clearDbHistory())
        store.dispatch(clearResponses())
        store.dispatch(getHistory({userId}))
    }
    const HandleOnDelete = ()=>{
        store.dispatch(deleteHistory({userId}))
    }
    useEffect(()=>{
        store.dispatch(getHistory({userId}))
    },[userId])

  return (
     <>
    {toggle ? <div className='w-[25%] bg-slate-700 h-screen translate-smooth duration-600  whitespace-nowrap overflow-hidden'>
        <div className='flex justify-between ml-8 m-6 text-gray-100'>
            <TfiAlignJustify onClick={HandleOnclickToggle} className="cursor-pointer w-[25px] h-[25px]"/>
            <div className="flex items-center gap-4 font-semibold text-xl"><p>New Chat</p> <RiChatNewFill onClick={handleOnNewChat} className="cursor-pointer w-[45px] h-[35px]"/></div>
        </div>
        <div className="flex items-center gap-4 m-6 mt-12 text-gray-100">
            <BsFillChatLeftTextFill className="w-[50px] h-[40px] text-gray-100"/>
            <h2 className="text-2xl font-semibold">GPT CLONE</h2>
        </div>
        <div className="flex flex-col gap-6 m-6 mt-12 text-gray-100">
            <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Recent</h2>
            <FcDeleteDatabase onClick={HandleOnDelete} className="w-[30px] h-[30px] hover:bg-slate-600 cursor-pointer"/>
            </div>
            
            <div className="flex flex-col gap-4 h-[450px] overflow-y-auto overflow-x-hidden scroll-smooth p-1 scrollbar-thin scrollbar-thumb-gray-500">
                {extractedData.map((prompt, index) => (
                <div key={index} onClick={() => HandleOnRecent(prompt)} className="flex gap-2 w-full">
                    <div>
                    <CiChat1 className="cursor-pointer w-[25px] h-[25px] mb-2" />
                    </div>
                    <p className="text-lg cursor-pointer">{prompt}</p>
                </div>
                ))}
            </div>
        </div>

        </div>:
        <div className='flex justify-between bg-slate-600 w-[80px] min-h-screen'>
            <TfiAlignJustify onClick={HandleOnclickToggle} className="ml-8 m-6 text-white cursor-pointer w-[25px] h-[25px]"/>
        </div>}
        </>
    
  )
}
{/* <div className="min-h-screen flex flex-col">
        <div className="flex-grow p-6">
        </div>
        <div className="flex flex-col gap-6 sticky bottom-6 m-6 text-gray-100 text-xl">
            <h2>Help</h2>
            <h2>About</h2>
        </div>
        </div> */}
export default SideBar