import React, { useContext, useEffect } from 'react'
import styles from './ProductDetails.module.css'
import ImageDisplayer from '../ProductModal/ImageDisplayer'
import ProductDescription from '../ProductModal/ProductDescription'
import ProductHeading from './ProductHeading'
import ProductOverview from './ProductOverview'
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from '../LandingPageDocs/ProductCard'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import { MyContext } from '../../../store/Context'
function ProductDetails() {


    const context = useContext(MyContext);
  
    useEffect(()=>{
    context.setIsHeaderFooter(true);
    },[])
  return (
    <div className={`${styles['main-details-cont']} container mt-3 p-5`}>
      <div className="d-flex gap-5">
      <ImageDisplayer/>
        <div className={`d-flex flex-column gap-2`}>
        <ProductHeading/>
        <ProductDescription/>  
        </div>
      </div>
      <div className="">
        <ProductOverview/>
      </div>

      <div className="d-flex gap-3 flex-column">
        <h3>Related Product</h3>
        <div className="">
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
         
    </div>
  )
}

export default ProductDetails