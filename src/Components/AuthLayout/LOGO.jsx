import React from 'react'
import webLogo from '../../../assets/brands/logo.png'
import { useNavigate } from 'react-router'

const LOGO = () => {
  const navigate = useNavigate()

  return (
          <div className='flex items-end'>
              <img onClick={()=>navigate('/')}  className='cursor-pointer' src={webLogo} alt="logo" />
    
              <h2 onClick={()=>navigate('/')}  className='text-3xl font-bold -ms-2.5 cursor-pointer'>ZapShift</h2>
          </div>
  )
}

export default LOGO