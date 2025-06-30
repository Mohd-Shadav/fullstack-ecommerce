import React from 'react'
import styles from './NewProducts.module.css'
import ProductCard from './ProductCard'

function NewProducts() {
  return (
    <div className={`${styles['newProductsMainCont']}`}>
    <div className={`${styles["HeadingsCont"]} d-flex flex-column mx-3`}>
              <h3>New Products</h3>
              <p>New products with updated stocks.</p>
   </div>

   <div className={`d-flex flex-wrap gap-2 mx-2 w-full`}>
       {Array.from({length:14}).map((item)=>{
          return (
            <ProductCard/>
          )
       })}
   </div>
    </div>
  )
}

export default NewProducts