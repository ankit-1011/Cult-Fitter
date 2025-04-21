// SwiperCarousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../css/style.css'

const SwiperCarousel = ({ data }) => {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {data?.map((item, index) => (
        <SwiperSlide key={index}>
          <img
            src={item?.gifUrl || item?.image || 'https://via.placeholder.com/300'}
            alt={item?.name || `Exercise ${index + 1}`}
            style={{ borderRadius: '10px' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
