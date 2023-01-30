import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom"

import UserContext from '../../context/UserContext'

function AdminGuard() {
    const { isAdmin } = useContext(UserContext)


    return isAdmin ? <Outlet /> : <Navigate to="/home" />
}

export default AdminGuard;