import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }

    if(user){
        return children
    }

    return <Navigate to={'/'}></Navigate>
}

export default PrivateRoute