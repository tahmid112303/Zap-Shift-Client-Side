import React from 'react'
import safeDelivery from '../../../zap-shift-client-side/assets/logos/safe-delivery.png'
import liveTracking from '../../../zap-shift-client-side/assets/logos/live-tracking.png'

const ParceLInfo = () => {
  return (
    <div className='mt-45 flex flex-col gap-6'>
        <div className='bg-white h-67.5 rounded-3xl flex gap-18 justify-center items-center pl-8'>
            <img className='h-50 w-50' src={liveTracking} />

            <div className='flex flex-col gap-4 pr-10'>
                <h1 className='font-extrabold text-secondary text-2xl'>Live Parcel Tracking</h1>

                <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
            </div>
        </div>

    
        <div className='bg-white h-67.5 rounded-3xl flex gap-18 justify-center items-center pl-8'>
            <img className='h-50 w-50' src={safeDelivery} />

            <div className='flex flex-col gap-4 pr-10'>
                <h1 className='font-extrabold text-secondary text-2xl'>100% Safe Delivery</h1>

                <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
            </div>
        </div>

        <div className='bg-white h-67.5 rounded-3xl flex gap-18 justify-center items-center pl-8'>
            <img className='h-50 w-50' src={safeDelivery} />

            <div className='flex flex-col gap-4 pr-10'>
                <h1 className='font-extrabold text-secondary text-2xl'>24/7 Call Center Support</h1>

                <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
            </div>
        </div>

    </div>
  )
}

export default ParceLInfo