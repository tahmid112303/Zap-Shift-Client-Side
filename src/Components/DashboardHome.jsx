import React from 'react'
import useRole from '../Hooks/UseRole'
import AdminDashboardHome from './AdminDashboardHome'
import RiderDashboard from './RiderDashboard'
import UserDashboardHome from './UserDashboardHome'

const DashboardHome = () => {
    const {role,roleLoading} = useRole()

    if(roleLoading){
        return <div className='flex justify-center items-center mt-20'><span className="loading loading-spinner text-info"></span></div>
    }

    if(role === "admin"){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role === "rider"){
        return <RiderDashboard></RiderDashboard>
    }
    else {
        return <UserDashboardHome></UserDashboardHome>
    }

}

export default DashboardHome