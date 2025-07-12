import React from 'react'
import Advertisement from './Advertisement'
import PopularProducts from './PopularProducts'
import NewProducts from './NewProducts'
import styles from './Products.module.css';
import SalesCard from './SalesCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

function Products() {
  return (
    <div className='container-fluid mt-5 d-flex justify-center'>

          <div className="d-flex">
            <Advertisement/>
            <div className={`d-flex flex-column gap-4 ${styles['productsContainer']} overflow-scroll`}>
                <PopularProducts/>
                <NewProducts/>
                <div className="mx-5 d-flex gap-3">

                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        // onSwiper={(Swiper)=>console.log('')}
        // onSlideChange={()=>console.log('')}
        speed={1000}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        navigation={true}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
           <SwiperSlide className='d-flex gap-2'>
            <SalesCard/>
           <SalesCard/>
           <SalesCard/>
           </SwiperSlide>     
           <SwiperSlide className='d-flex gap-2'>
            <SalesCard/>
           <SalesCard/>
           <SalesCard/>
           </SwiperSlide>    
           <SwiperSlide className='d-flex gap-2'>
            <SalesCard/>
           <SalesCard/>
           <SalesCard/>
           </SwiperSlide>  
              </Swiper>
            </div>
            </div>

           
          </div>

    </div>
  )
}

export default Products