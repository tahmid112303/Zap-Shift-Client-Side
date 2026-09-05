import React from 'react'
import useAuth from '../Hooks/useAuth'
import UseRole from '../Hooks/UseRole'

const AdminRoute = ({ children }) => {
    const { loading } = useAuth();
    const { role, roleLoading } = UseRole()

    if (loading || roleLoading) {
        return <span className='loading loading-spinner loading-xl'></span>
    }

    if (role !== 'admin') {
        return <div>Access Forbidden</div>
    }

    return children;
};

export default AdminRoute;
