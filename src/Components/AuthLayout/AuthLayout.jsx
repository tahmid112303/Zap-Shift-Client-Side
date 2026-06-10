import React from 'react'
import LOGO from './LOGO'
import { Outlet } from 'react-router'
import authLogo from '../../../assets/logos/authImage.png'

const AuthLayout = () => {
  return (
    <div className='max-w-7xl mx-auto bg-white min-h-screen'>
        <div>
          <LOGO></LOGO>
        </div>

        <div className='flex'>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>

            <div className='flex-1'>
                <img src={authLogo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default AuthLayout