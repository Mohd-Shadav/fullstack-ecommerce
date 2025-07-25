import React from 'react'
import styles from './NewProducts.module.css'
import ProductCard from './ProductCard'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function NewProducts() {
  const [getNew,setGetNew] = useState([])

  const getNewProducts =async ()=>{
    
    try{
      let res = await axios.get("http://localhost:3000/api/products/get-new-products");
        
      setGetNew(res.data);


    }catch(err)
    {
      alert("Data was not fetched...")
    }

  }

  useEffect(()=>{
    getNewProducts();

  },[])


  return (
    <div className={`${styles['newProductsMainCont']}`}>
    <div className={`${styles["HeadingsCont"]} d-flex flex-column mx-3`}>
              <h3>New Products</h3>
              <p>New products with updated stocks.</p>
   </div>

   <div className={`d-flex flex-wrap gap-7 mx-2 w-full`}>
       {getNew.map((item,idx)=>{
          return (
            <ProductCard key={idx}  product={item}/>
          )
       })}
   </div>
    </div>
  )
}

export default NewProducts