import React from 'react'
import useAuth from '../Hooks/useAuth';
import useRole from '../Hooks/UseRole';

const RiderRoute = ({children}) => {
const { loading,user } = useAuth();
    const { role, roleLoading } = useRole()

    if (loading || !user || roleLoading) {
        return <span className='loading loading-spinner loading-xl'></span>
    }

    if (role !== 'rider') {
        return <div>Access Forbidden</div>
    }

    return children;
}

export default RiderRoute