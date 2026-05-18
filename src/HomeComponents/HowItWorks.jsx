import React from 'react'
import icon from '../../../zap-shift-client-side/assets/brands/bookingIcon.png'

const HowItWorks = () => {
  return (
    <div className='mt-25 ml-10 flex flex-col gap-8'>
        <h1 className='font-extrabold text-[32px] text-secondary'>How it Works</h1>

    <div className='flex gap-5 max-sm:flex-col text-[#606060]'>
        <div className='w-75 h-75 bg-white rounded-3xl p-8'>
            <img src={icon}  />
            <h1 className='text-secondary font-bold text-2xl mt-6'>Booking Pick & Drop</h1>
            <p className='mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>        
        </div>

        <div className='w-75 h-75 bg-white rounded-3xl p-8'>
            <img src={icon}  />
            <h1 className='text-secondary font-bold text-2xl mt-6'>Cash On Delivery</h1>
            <p className='mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className='w-75 h-75 bg-white rounded-3xl p-8'>
            <img src={icon}  />
            <h1 className='text-secondary font-bold text-2xl mt-6'>Delivery Hub</h1>
            <p className='mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>

        <div className='w-75 h-75 bg-white rounded-3xl p-8'>
            <img src={icon}  />
            <h1 className='text-secondary font-bold text-2xl mt-6'>Booking SME & Corporate</h1>
            <p className='mt-4'>From personal packages to business shipments — we deliver on time, every time.</p>
        </div>
    </div>
    </div>
  )
}

export default HowItWorks