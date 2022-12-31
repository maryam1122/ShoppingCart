import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { ProductList } from '../../types/product';
import Products from '../product/products';


const LatestProducts = ({list}:ProductList) => {
 
    SwiperCore.use([Autoplay,Pagination,Navigation])
  return (
  
    <div>
        <Swiper
           speed={1200}
           autoplay={false}
           spaceBetween={20}
           slidesPerView={5}
           navigation={true}
           modules={[Navigation]}
           className="mySwiper"
        >
        {list.map((product,index)=>(
            <SwiperSlide key={product.id}>
                <Products info={product} />
            </SwiperSlide>
        )
        )}
        </Swiper>
    </div>
  )
}

export default LatestProducts