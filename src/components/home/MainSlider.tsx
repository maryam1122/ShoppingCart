import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import slideImg2 from '../../images/banner-2.png'


export const MainSlider = () => {
  SwiperCore.use([Autoplay, Pagination, Navigation]);
  return (
    <Swiper
      autoplay={true}
      speed={1200}
      slidesPerView={1}  
    >
      <SwiperSlide>
        <img
          className="slider--img"
          src={slideImg2} 
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="slider--img"
          src={slideImg2}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="slider--img"
          src={slideImg2}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default MainSlider;
