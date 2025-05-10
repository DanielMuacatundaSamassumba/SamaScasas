import React from 'react';
import ImageBanner from './../../../assets/Blue Geometric Real Estate Banner 1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay, A11y, Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={ImageBanner} className="w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ImageBanner} className="w-full" />
      </SwiperSlide>
    </Swiper>
  );
}
