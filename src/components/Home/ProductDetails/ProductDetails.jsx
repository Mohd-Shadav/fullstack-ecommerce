import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductDetails.module.css'
import ImageDisplayer from '../ProductModal/ImageDisplayer'
import ProductDescription from '../ProductModal/ProductDescription'
import ProductHeading from './ProductHeading'
import ProductOverview from './ProductOverview'
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from '../LandingPageDocs/ProductCard'
import axios from "axios"
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import 'swiper/css/effect-fade';
import { Navigation } from 'swiper/modules';
import { MyContext } from '../../../store/Context'
import { useParams } from 'react-router-dom'
function ProductDetails() {


    const context = useContext(MyContext);
    const {productId} = useParams();
    const [productDetailed,setProductDetailed] = useState([])
    const [relatedProducts,setRelatedProducts] = useState([]);
  
    useEffect(()=>{
    context.setIsHeaderFooter(true);

      const getProducts =async ()=>{

        let res = await axios.get(`http://localhost:3000/api/products/get-product/${productId}`)
      

        let relatedRes = await axios.get(`http://localhost:3000/api/products/category/${encodeURIComponent(res.data.category.categoryname)}`)
        
        setProductDetailed(res.data);
        setRelatedProducts(relatedRes.data);

      }

      getProducts();
    },[])
  return (
    <div className={`${styles['main-details-cont']} container mt-3 p-5`}>
      <div className="d-flex gap-5">
      <ImageDisplayer thumbnail={productDetailed?.images?.thumbnail} gallery={productDetailed?.images?.gallery}/>
        <div className={`d-flex flex-column gap-2`}>
        <ProductHeading product={productDetailed}/>
        <ProductDescription product={productDetailed}/>  
        </div>
      </div>
      <div className="">
        <ProductOverview product={productDetailed}/>
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
        
          
        >

          {relatedProducts.map((item)=>(
              <SwiperSlide>
            <ProductCard product={item}/>
          </SwiperSlide>
          ))}
       
        

        </Swiper>
        </div>
      </div>
         
    </div>
  )
}

export default ProductDetails