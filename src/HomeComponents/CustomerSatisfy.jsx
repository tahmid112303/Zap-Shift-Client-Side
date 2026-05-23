import React from 'react'
import merchant from '../../../zap-shift-client-side/assets/logos/be-a-merchant-bg.png'
import locationLogo from '../../../zap-shift-client-side/assets/logos/location-merchant.png'
import customerTop from '../../../zap-shift-client-side/assets/logos/customer-top.png'

const CustomerSatisfy = () => {
  return (
    <div className='relative'>
    <img src={merchant} className='relative top-54' />

    <div className='bg-secondary h-110 rounded-4xl mt-10'>
        

        <div className='flex flex-col items-start'>
            <h1 className='text-white font-extrabold text-[40px] ml-20 mt-20'>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>

            <p className='text-[#DADADA] my-8 mx-20'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every corner <br /> of Bangladesh right on time.</p>

            <div className='flex gap-4 ml-20'>
                <button className='bg-primary btn rounded-4xl font-bold'>Become a Merchant</button>

                <button className='bg-primary btn rounded-4xl font-bold'>Earn with ZapShift Courier</button>
                
            </div>
        </div>
    </div>

    <img className='absolute bottom-20 right-10' src={locationLogo} alt="" />

    <img className='absolute bottom-15 right-140' src={customerTop} alt="" />
    </div>
  )
}

export default CustomerSatisfy