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
     const [categoryObj,setCategoryObj] = useState([])

   
  

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
    

      const getCategory =async ()=>{
        try{
          const res = await axios.get("http://localhost:3000/api/category/get-categories");
          setCategoryObj(res.data);

        }catch(err)
        {
          alert("Failed to get categories at popular products...")
        }

      }

    

    const getProducts =async ()=>{
     let res = await axios.get(`http://localhost:3000/api/products/get-popular-products/${activeCategory}`);
    
     setProducts(res.data);
    }

    getCategory();
  
    getProducts();

  },[activeCategory])

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
                <li  onClick={()=>handleCategoryActive(item.categoryname)} > 
                <Link className={`${activeCategory===item.categoryname ? styles["activeCat"]:""}`}>{["Beauty & Personal Care", "Health & Wellness"].includes(item.categoryname) ? item.categoryname.split('').splice(0,5).join('')+"...": item.categoryname}</Link>
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
       {products.map((item) => (
  <SwiperSlide key={item._id || item.id}>
    <ProductCard product={item} />
  </SwiperSlide>
))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularProducts;
