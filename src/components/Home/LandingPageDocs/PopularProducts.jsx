import React, { useRef, useState,useEffect } from "react";
import styles from "./PopularProducts.module.css";
import { Button } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';


function PopularProducts() {
 
     const [scrollerCategory,setScrollerCategory] = useState("");
     const [activeCategory,setActiveCategory] = useState("Fashion")
     const [products,setProducts] = useState([])
     const listRef = useRef();

     let categoryObj = [
      {
        src:"fashionLogo",
        name:'Fashion'
      },
      {
        src:"electronicsLogo",
        name:'Electronics'
      }
      ,
      {
        src:"bagLogo",
        name:'Bags'
      }
      ,
      {
        src:"footwearLogo",
        name:'Footwear'
      }
      ,
      {
        src:"groceriesLogo",
        name:'Groceries'
      }
      ,
      {
        src:"beautyLogo",
        name:'Beauty'
      }
      ,
      {
        src:"wellnessLogo",
        name:'Wellness'
      }
      ,
      {
        src:"jewelleryLogo",
        name:'Jewellery'
      }
  
    ]
  

     const handleRightScroller = ()=>{
         setScrollerCategory(true);
         listRef.current.scrollTo({left:450,behavior:'smooth'})
     }
     const handleLeftScroller = ()=>{
      setScrollerCategory(false);
      listRef.current.scrollTo({left:0,behavior:'smooth'})
     }
     const handleCategoryActive = (item)=>{
           setActiveCategory(item);
     }


     useEffect(()=>{
    

    const getProducts =async ()=>{
     let res = await axios.get("http://localhost:3000/api/products/get-products");
     console.log(res.data)
     setProducts(res.data);
    }
  
    getProducts();

  },[])

  return (
    <div
      className={`container ${styles["mainContPopularProduct"]} d-flex flex-column`}
    >
      <div className={`${styles["HeadingCategoryCont"]} d-flex container`}>
        <div className={`${styles["HeadingsCont"]} d-flex flex-column`}>
          <h3>Popular Products</h3>
          <p>Do not miss the current offers until the end of March.</p>
        </div>

        <div className={`${styles["categoryListCont"]} d-flex`}>
        {scrollerCategory &&
            <span>
            <Button onClick={handleLeftScroller}>
              <FaArrowLeft />
            </Button>
          </span>
        }
          <ul ref={listRef} className={`d-flex ${styles['listCategory']}`}>
          {
            categoryObj.map((item)=>{
              return (
                <li  onClick={()=>handleCategoryActive(item.name)} > 
                <Link className={`${activeCategory===item.name ? styles["activeCat"]:""}`}>{item.name}</Link>
              </li>
              )
            })
          }
    
          </ul>
        {!scrollerCategory &&
            <span>
            <Button onClick={handleRightScroller}>
              <FaArrowRight />
            </Button>
          </span>
        }
        </div>
      </div>
      <div className={`${styles["popularProductCardsMainDiv"]} container`}>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation]}
          navigation={true}
          pagination={{ clickable: true }}
  
        >
       
        {products.map((item)=>(
             
        
          <SwiperSlide>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularProducts;
