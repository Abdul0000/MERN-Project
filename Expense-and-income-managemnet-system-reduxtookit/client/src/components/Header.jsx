import { Link, useNavigate } from "react-router-dom"
import { getUserFromLocal } from "../ReduxStore/feature/AuthSlice"
import store from "../ReduxStore/store"
import { useSelector } from "react-redux"

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.clear()
    // store.dispatch(getUserFromLocal())
    navigate('/login')
  }
  
  return (
    <nav className="flex items-center justify-between w-full h-[90px] bg-slate-700 sticky top-0 z-50 px-8 shadow-md">
    {/* Logo/Title */}
    <h1 className="text-2xl font-semibold text-white tracking-wide">
      EXPENSE MANAGEMENT SYSTEM
    </h1>
  
    {/* Navigation Links */}
    <div className="hidden md:flex items-center gap-10 text-xl text-white">
      <Link
        to="/dashboard"
        className="hover:text-gray-300 transition-colors duration-200"
      >
        DASHBOARD
      </Link>
      <Link
        to="/"
        className="hover:text-gray-300 transition-colors duration-200"
      >
        TRANSACTIONS
      </Link>
      <Link to={'/about'} className="hover:text-gray-300 cursor-pointer transition-colors duration-200">
        ABOUT
      </Link>
    </div>
  
    <div className="flex items-center gap-6">
    {user ? <div className="flex -mt-16 -mr-32 items-center font-semibold justify-center gap-6 text-white">
      <div>{user.email}</div>
      <div>{user.name}</div>
    </div>: ""}
    
      {user ? (
        <button
          onClick={handleLogout}
          className="bg-white text-gray-700 font-bold text-lg px-6 py-2 rounded-md hover:bg-gray-200 transition-all duration-200 mt-4 "
          type="button"
        >
          Log Out
        </button>
      ) : (
        <Link to="/login">
          <button
            className="bg-white text-gray-700 font-bold text-lg px-6 py-2 rounded-md hover:bg-gray-200 transition-all duration-200"
            type="button"
          >
            Log In
          </button>
        </Link>
      )}
      
    </div>
    
  
    <div className="md:hidden">
      <button
        className="text-white hover:text-gray-300 transition-colors duration-200"
        aria-label="Open Menu"
      >
      </button>
    </div>
  </nav>
  
  )
}

export default Header