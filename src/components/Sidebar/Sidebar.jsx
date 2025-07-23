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
import {useDispatch, useSelector} from 'react-redux'
import { getFilterData, getFilterDataUpdationTrigger } from '../../store/reduxSlice';


function Sidebar() {
    const [value, setValue] = useState([100, 60000]);
       const category = useSelector((state)=>state.category.value)
   const [getFeaturedProducts,setGetFeaturedProducts] = useState([]);
      const [subCategoriesList,setSubCategoriesList] = useState([]);
      const dispatch = useDispatch();

     
const [filterData,setFilterData] = useState({
  subcategory:"",
  pricerange:[],
  rating:3.5
})

   const handleFilterization = (e) => {
  
  const { name, value } = e.target;

  if(name=== "pricerange")
  {
    setValue(value);
   
  }

    setFilterData((prev)=>({
      ...prev,
      [name]:value
    }))

};

useEffect(()=>{




 

  dispatch(getFilterData(filterData));
  dispatch(getFilterDataUpdationTrigger());


},[filterData])

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
      <FormControlLabel className={`${styles['radio-btns']}`} value={""} control={<Radio />} label={"All"} name={"subcategory"} onChange={handleFilterization}/>
     {subCategoriesList.map((item)=>{
      return (
           <FormControlLabel className={`${styles['radio-btns']}`} value={item} control={<Radio />} label={item} name={"subcategory"} onChange={handleFilterization}/>
      )
     })}
       
      </RadioGroup>
    </FormControl>
            </div>
        </div>
       

        <div className={`${styles['filter-price']}`}>
            <h6>FILTER BY PRICE</h6>
            <div className="mt-2">
                <RangeSlider  value={value} 
      
        min={100} 
        max={60000} 
        step={100} 
        name={"pricerange"} 
      

         onInput={(val) => handleFilterization({ target: { name: 'pricerange', value: val } })}

        />
        <div className={`mt-2 d-flex gap-5 `}>
            <span style={{flex:'0 0 50%',flexShrink:0}}>From : <strong style={{color:'rgba(0,0,0,0.5'}}>{value[0]}</strong></span>
            <span style={{flex:'0 0 40%',flexShrink:0}}>To : <strong style={{color:'rgba(0,0,0,0.5'}}>{value[1]}</strong></span>
        </div>
            </div>
        </div>

        <div className={`${styles['filter-rating']}`}>
        <h6>FILTER BY RATING</h6>
        <div className={`${styles['rating-div-container']} d-flex flex-column gap-2`} >
        <Rating name="rating" value={filterData.rating}   precision={0.1}   onChange={(event, newValue) => {
    handleFilterization({ target: { name: "rating", value: newValue } });
  }}
   sx={{
   
    cursor: 'pointer'
  }}

/>
      
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