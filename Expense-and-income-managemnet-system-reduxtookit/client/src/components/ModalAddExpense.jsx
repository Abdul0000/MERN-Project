import { useRef } from "react";
import store from '../ReduxStore/store'
import { addExpenses, getExpenses } from "../ReduxStore/feature/ExpensesActions.js";
import { useSelector } from "react-redux";
const ModalAddExpense = ({invisible,setInvisible})=>{
    const auth = useSelector(state => state.auth.user)
    const user = auth?auth._id : ''
    const dateRef = useRef(null);
    const descriptionRef = useRef(null);
    const amountRef = useRef(null);

    if(!invisible) return null

    const handleAdd = () => {
        const date = dateRef.current.value;
        const description = descriptionRef.current.value;
        const expenses = amountRef.current.value;
        store.dispatch(addExpenses({date,description,expenses,user}))
        store.dispatch(getExpenses({user}))
    
        // Clear all input fields
        dateRef.current.value = '';
        descriptionRef.current.value = '';
        amountRef.current.value = '';
    };
    const HandelOnCLick = ()=>{
        setInvisible(false)
    }
    return(
        <div className="fixed bg-black inset-0 bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
            <div className="w-[600px] h-[500px] bg-white flex flex-row rounded">
                <button onClick={HandelOnCLick} className="text-xl text-black place-self-start pr-2" type="button">X</button>   
                <div className="flex ml-2 w-[90%] flex-col justify-center gap-8 px-6 py-2">
                <input ref={dateRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="Date" placeholder="Email" required></input>
                <textarea ref={descriptionRef} className=" h-[110px] p-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="text" placeholder="Description" required></textarea>
                <input ref={amountRef} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none" type="text" placeholder="Income + or Expense -" required></input>
                <button onClick={handleAdd} className=" h-[55px] px-4 text-xl border border-gray-600 rounded-[2px] outline-none bg-gray-700 text-white" type="button" >Add</button>
                </div>
            </div>
        </div>
    )
}
export default ModalAddExpense