import React from 'react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import amazon from '../../../zap-shift-client-side/assets/brands/amazon.png'
import amazon_vector from '../../../zap-shift-client-side/assets/brands/amazon_vector.png'
import casio from '../../../zap-shift-client-side/assets/brands/casio.png'
import moonsar from '../../../zap-shift-client-side/assets/brands/moonstar.png'
import randstad from '../../../zap-shift-client-side/assets/brands/randstad.png'
import star from '../../../zap-shift-client-side/assets/brands/star.png'
import star_people from '../../../zap-shift-client-side/assets/brands/start_people.png' 

const brandLogos = [amazon,amazon_vector,casio,moonsar,randstad,star,star_people]

const Brands = () => {
  return (
    <>
        <h1 className='text-secondary text-center font-extrabold text-[28px] mb-10 mt-25'>We've helped thousands of sales teams</h1>

      <Swiper
  slidesPerView={4}
  spaceBetween={30}
  loop={true}
  modules={[Autoplay]}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
>
      
        {brandLogos.map((logo,index) => <SwiperSlide key={index}>
          <img src={logo} />
        </SwiperSlide>)}
      

    </Swiper>
    </>
  )
}

export default Brands