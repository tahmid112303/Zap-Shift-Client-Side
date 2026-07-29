import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router'

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <div className='flex justify-center items-center mt-20'><span className="loading loading-spinner text-info"></span></div>
    }

    if(user){
        return children
    }

    return <Navigate state={location?.pathname} to={'/login'}></Navigate>
}

export default PrivateRoute