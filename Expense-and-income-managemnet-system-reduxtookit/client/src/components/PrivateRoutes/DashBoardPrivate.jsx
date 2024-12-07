import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { verifyUser } from "../../ReduxStore/feature/AuthActions.js"
import store from "../../ReduxStore/store.js"
import { Outlet } from "react-router-dom"

const DashBoardPrivate = () => {
    
    const status = useSelector(state => state.auth.protectStatus)
    const token = useSelector(state => state.auth.token)

    useEffect(()=>{
        store.dispatch(verifyUser({token}))
    },[token])
    

  return (
    <>
    {status ? <Outlet/> : <h1 className="flex justify-center items-center">LOADING</h1>}
    </>
  )
}

export default DashBoardPrivate