import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { Rating } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from '../Home/LandingPageDocs/ProductCard';
import Advertisement from '../Home/LandingPageDocs/Advertisement';
import axios from 'axios';
import {useSelector} from 'react-redux'


function Sidebar() {
    const [value, setValue] = useState([100, 60000]);
       const category = useSelector((state)=>state.category.value)
   const [getFeaturedProducts,setGetFeaturedProducts] = useState([]);
      const [subCategoriesList,setSubCategoriesList] = useState([]);

    useEffect(()=>{
      const getFeaturedProducts =async ()=>{

        try{
          const res = await axios.get("http://localhost:3000/api/products/get-featured-products");
          setGetFeaturedProducts(res.data);



        }catch(err){
          alert("Error to fetch Featured Products at SideBar...")
        }


      }

       const fetchSubCategories = async ()=>{

        let getCategoryData = await axios.get(`http://localhost:3000/api/category/category-name/${category}`);
       
        let res = await axios.get(`http://localhost:3000/api/category/${getCategoryData.data._id}/sub-category`);
        setSubCategoriesList(res.data);
   

    }
      getFeaturedProducts()

      fetchSubCategories();

    },[category])

  return (
    <div className={`${styles['sidebar-main-container']}`}>
        <div className={`${styles['product-category-container']}`}>
            <h6>PRODUCT CATEGORIES</h6>
            <div className={`${styles['radio-btns-container']}`}>
            <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="men"
        name="radio-buttons-group"
      >
     {subCategoriesList.map((item)=>{
      return (
           <FormControlLabel className={`${styles['radio-btns']}`} value={item} control={<Radio />} label={item} />
      )
     })}
       
      </RadioGroup>
    </FormControl>
            </div>
        </div>

        <div className={`${styles['filter-price']}`}>
            <h6>FILTER BY PRICE</h6>
            <div className="mt-2 w-full">
                <RangeSlider  value={value} 
        onInput={setValue} 
        min={100} 
        max={60000} 
        step={100}  
        />
        <div className={`mt-2 d-flex gap-5`}>
            <span style={{flex:'0 0 50%'}}>From : <strong style={{color:'rgba(0,0,0,0.5'}}>{value[0]}</strong></span>
            <span style={{flex:'0 0 50%'}}>To : <strong style={{color:'rgba(0,0,0,0.5'}}>{value[1]}</strong></span>
        </div>
            </div>
        </div>

        <div className={`${styles['filter-rating']}`}>
        <h6>FILTER BY RATING</h6>
        <div className={`${styles['rating-div-container']} d-flex flex-column gap-2`}>
        <Rating name="read-only" value={5} readOnly sx={{ cursor: "pointer" }} />
        <Rating name="read-only" value={4} readOnly />
        <Rating name="read-only" value={3} readOnly />
        <Rating name="read-only" value={2} readOnly />
        <Rating name="read-only" value={1} readOnly />
        </div>
        </div>

        <div className={`${styles['swiperCont']} mt-2`}>
          <h6>FEATURED PRODUCTS</h6>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-4">
       
        {getFeaturedProducts.map((item)=>(
          <SwiperSlide>
        <ProductCard product={item}/>
        </SwiperSlide>
        ))

        }
      </Swiper>
         
        </div>

        <div className="">
          <Advertisement/>
        </div>
    </div>
  )
}

export default Sidebar