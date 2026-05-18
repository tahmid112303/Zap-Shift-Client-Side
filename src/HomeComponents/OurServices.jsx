import React from 'react'
import serviceLogo from '../../../zap-shift-client-side/assets/logos/service.png'

const OurServices = () => {
  return (
    <div className='lg:h-266 sm:h-auto md:h-auto bg-secondary mt-25 rounded-4xl pt-25 '>
        <h1 className='text-white font-extrabold text-[40px] text-center max-sm:text-left max-sm:ml-4 '>Our Services</h1>

        <p className='text-center text-[#DADADA] mt-4 max-sm:text-left max-sm:ml-4 max-sm:mr-4'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>

        <div className='grid lg:grid-cols-3 gap-6 mx-auto w-fit mt-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='bg-white w-100 h-87.5 rounded-2xl'>
                <div className='w-22 h-22 rounded-full bg-blue-100 flex justify-center items-center mx-auto mt-8'><img src={serviceLogo}></img></div>

                <h1 className='text-secondary mt-4 mb-4 text-center font-bold text-2xl'>Express & Standard <br /> Delivery</h1> 

                <p className='text-center mx-6'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
            </div>

            <div className='bg-white w-100 h-87.5 rounded-2xl'>
                <div className='w-22 h-22 rounded-full bg-blue-100 flex justify-center items-center mx-auto mt-8'><img src={serviceLogo}></img></div>

                <h1 className='text-secondary mt-4 mb-4 text-center font-bold text-2xl'>Nationwide Delivery</h1>

                <p className='text-center mx-6'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
            </div>

            <div className='bg-white w-100 h-87.5 rounded-2xl'>
                <div className='w-22 h-22 rounded-full bg-blue-100 flex justify-center items-center mx-auto mt-8'><img src={serviceLogo}></img></div>

                <h1 className='text-secondary mt-4 mb-4 text-center font-bold text-2xl'>Fulfillment Solution</h1>

                <p className='text-center mx-6'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>

            </div>

            <div className='bg-white w-100 h-87.5 rounded-2xl'>
                <div className='w-22 h-22 rounded-full bg-blue-100 flex justify-center items-center mx-auto mt-8'><img src={serviceLogo}></img></div>

                <h1 className='text-secondary mt-4 mb-4 text-center font-bold text-2xl'>Cash on Home Delivery</h1>

                <p className='text-center mx-6'>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
            </div>

            <div className='bg-white w-100 h-87.5 rounded-2xl'>
                <div className='w-22 h-22 rounded-full bg-blue-100 flex justify-center items-center mx-auto mt-8'><img src={serviceLogo}></img></div>

                <h1 className='text-secondary mt-4 mb-4 text-center font-bold text-2xl'>Corporate Service / Contract In Logistics</h1>

                <p className='text-center mx-6'>Customized corporate services which includes warehouse and inventory management support.</p>
            </div>

            <div className='bg-white w-100 h-87.5 rounded-2xl'>
                <div className='w-22 h-22 rounded-full bg-blue-100 flex justify-center items-center mx-auto mt-8'><img src={serviceLogo}></img></div>

                <h1 className='text-secondary mt-4 mb-4 text-center font-bold text-2xl'>Parcel Return</h1>

                <p className='text-center mx-6'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
            </div>
        </div>
    </div>
  )
}

export default OurServices