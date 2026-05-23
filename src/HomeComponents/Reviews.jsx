import React, { use } from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewPromise}) => {
    const data = use(reviewPromise)
    
  return (
    <div className='mt-10'>
        <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          scale: 0.75,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        
        >
        {data.map(reviewCard => <SwiperSlide>
          <ReviewCard 
            key={reviewCard.id}
            reviewCard={reviewCard}>
          </ReviewCard>
        </SwiperSlide>)}
        </Swiper>
    </div>
  )
}

export default Reviews