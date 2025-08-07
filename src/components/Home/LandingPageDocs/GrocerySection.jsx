import React, { useEffect, useState } from 'react'
import styles from './GrocerySection.module.css'
import ProductCard from './ProductCard'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import ReactSkeleton from '../../NoResultFound/ReactSkeleton';

function GrocerySection() {


  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);

       useEffect(()=>{
    

    

    

    const getProducts =async ()=>{

      try{
        setLoading(true);
        let res = await axios.get(`http://localhost:3000/api/products/get-popular-products/Groceries`);
       
        setProducts(res.data);
      }catch(err){

        alert("Error:Failed to load Grocery Section...")

      }finally{

        setLoading(false)

      }
    
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
     {loading ? (
      Array.from({length:5}).map((_,idx)=>{
        return (
             <SwiperSlide key={idx}>
          <ReactSkeleton/>
          </SwiperSlide>
        )
      })
     )  : ( products.map((item,idx)=>{
      return (
          
          <SwiperSlide key={idx}>
            <ProductCard key={idx} product={item}/>
          </SwiperSlide>

      )
     }))

     }
   
        </Swiper>
      </div>
        </div>
  )
}

export default GrocerySection