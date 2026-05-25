import React from 'react'
import errorLogo from '../../../zap-shift-client-side/assets/logos/errorIcon.png'
import { useNavigate } from 'react-router'

const Error = () => {
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

  return (
    <div className='bg-white h-170 rounded-4xl mt-8 flex flex-col items-center justify-center'>
        <div>
            <img src={errorLogo}/>
        </div>

        <div className='text-3xl text-[#1A1A1A] font-extrabold'>
            Page Not Found
        </div>

        <div>
            <button onClick={handleGoHome} className='btn bg-primary mt-10 font-bold w-37.5 h-14 text-2xl rounded-2xl'>Go Home</button>
        </div>
    </div>
  )
}

export default Error