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
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function FeaturedProducts() {


    const [getFeatured,setGetFeatured] = useState([]);


    const getFetauredProducts = async ()=>{
         
      try{

        let res = await axios.get("http://localhost:3000/api/products/get-featured-products");

        setGetFeatured(res.data);

      }catch(err){
        alert("Data was not fetched")

      }
    }


    useEffect(()=>{
   
       getFetauredProducts();
       
    },[])
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
     
        >
        
        {
          getFeatured.map((item,idx)=>(
               
          <SwiperSlide key={idx}>
            <ProductCard key={idx} product={item} />
          </SwiperSlide>
          ))
        }


        </Swiper>
      </div>
    </div>
  )
}

export default FeaturedProducts