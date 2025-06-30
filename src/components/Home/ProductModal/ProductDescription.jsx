import React, { useState } from 'react'
import styles from './ProductDescription.module.css'
import {  FaMinus, FaPlus, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { MdAddShoppingCart } from 'react-icons/md';
function ProductDescription() {
    const [sizes,setSizes] = useState('M');
    const [count,setCount] = useState(1);
  
  
    const fashionSizes = [
      'S','M','L','XL'
    ]
    const handleSizes = (size)=>{
        setSizes(size);
    }
  return (
  
          <div className={`d-flex flex-column ${styles['descriptionMainCont']}`}>
                     <div className={`d-flex flex-column ${styles['price-availability-description-Cont']}`}>
                      <span className={`d-flex`} style={{color:'red'}}><del style={{color:'gray'}}><FaRupeeSign /> 2500</del><FaRupeeSign /> 1500</span>

                      <span>
                        In Stock
                      </span>

                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quam nemo pariatur suscipit laborum! Praesentium nostrum maxime eveniet at odio ipsum dolor delectus facilis debitis doloremque consequatur, ducimus quod est?</p>
                     </div>

                     <div className={`${styles['size-addtocart-buy-cont']}`}>
                      <div className={`d-flex ${styles['sizeCont']}`}>
                        <span>Size: </span>
                        <div className={``}>
                       {fashionSizes.map((item)=>{
                          return (
                             <span className={sizes===item ? styles[`${item}-Size`]:""} onClick={()=>handleSizes(item)}>{item}</span>
                          )
                       
                        
                       })}
                        </div>
                      </div>
                      <div className={`d-flex ${styles['addToCartMainCont']}`}>
                      <div className={`d-flex ${styles['counterCont']}`}>
                      <Button onClick={() => { if (count > 1) setCount(prevCount => prevCount - 1); }}><FaMinus /></Button>
                        <span>{count}</span>
                        <Button onClick={()=>{setCount(prev=>prev+1)}}><FaPlus /></Button>
                      </div>
                      <div className={`d-flex ${styles['addCartSubCont']}`}>
                        <Button><span><MdAddShoppingCart /></span> Add To Cart</Button>
                      </div>
                      </div>
                      <div className={`${styles['buyBtnCont']}`}>
                        <Button><span><FaShoppingCart /></span> Buy</Button>
                      </div>
                     </div>
                  </div>
  
  )
}

export default ProductDescription