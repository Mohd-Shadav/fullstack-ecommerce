import React from 'react'
import styles from './FeaturedProducts.module.css'
import ProductCard from './ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';


function FeaturedProducts() {
  return (
    <div className={`container`}>
       <div className={`d-flex flex-column mt-4`}>
        <h3>Featured Products</h3>
        <p>Do not miss the current offers until the end of March.</p>
       </div>

       <div className={`${styles["popularProductCardsMainDiv"]} container`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // slidesPerGroup={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
       
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedProducts