import React, { useEffect, useState } from 'react'
import styles from './JewellerySection.module.css'
import ProductCard from './ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

function JewellerySection() {


  const [products,setProducts] = useState([]);

       useEffect(()=>{
    

    

    

    const getProducts =async ()=>{
     let res = await axios.get(`http://localhost:3000/api/products/get-popular-products/Groceries`);
    
     setProducts(res.data);
    
    }

   

  
    getProducts();

  },[])
  return (
    <div className={`container mt-4`}>
        <h3>Your Daily Essentials</h3>
        <p>Do not miss the current offers until the end of March.</p>

        <div className={`${styles["popularProductCardsMainDiv"]} container`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
      
        >
     {products.map((item,idx)=>{
      return (
          
          <SwiperSlide key={idx}>
            <ProductCard key={idx} product={item}/>
          </SwiperSlide>

      )
     })

     }
   
        </Swiper>
      </div>
        </div>
  )
}

export default JewellerySection