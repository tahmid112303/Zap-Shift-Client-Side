import React from 'react'
import webLogo from '../../../assets/brands/logo.png'

const LOGO = () => {
  return (
          <div className='flex items-end'>
              <img src={webLogo} alt="logo" />
    
              <h2 className='text-3xl font-bold -ms-2.5'>ZapShift</h2>
          </div>
  )
}

export default LOGO