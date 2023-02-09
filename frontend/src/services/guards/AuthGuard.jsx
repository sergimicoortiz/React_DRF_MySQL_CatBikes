import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import UserContext from '../../context/UserContext'

if(sessionStorage.getItem("path")){
    sessionStorage.removeItem("path")
}

export function NoAuthGuard() {
    const { isAuth } = useContext(UserContext);
    return !isAuth ? <Outlet /> : <Navigate to="/home" />
}

export function AuthGuard() {
    const { isAuth } = useContext(UserContext);
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}