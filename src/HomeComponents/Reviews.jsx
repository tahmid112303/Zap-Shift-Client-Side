import React, { use } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Reviews = ({reviewPromise}) => {
    const data = use(reviewPromise)
    console.log(data)
  return (
    <div className='mt-10'>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >
           <SwiperSlide>
              {data}
           </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Reviews