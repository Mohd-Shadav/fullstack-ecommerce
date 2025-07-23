import React, { useState } from 'react'
import styles from './ProductDescription.module.css'
import {  FaMinus, FaPlus, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { MdAddShoppingCart } from 'react-icons/md';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUserDataUpdationTrigger } from '../../../store/reduxSlice';
function ProductDescription({product}) {
    const [sizes,setSizes] = useState('M');
    const [count,setCount] = useState(1);
    const dispatch = useDispatch()
  
  
    const fashionSizes = [
      'S','M','L','XL'
    ]
    const handleSizes = (size)=>{
        setSizes(size);
    }


     const handleCart = async (id)=>{
          try{

            let userid = localStorage.getItem("userID")

          
            let res = await axios.post(`http://localhost:3000/api/users/addtocart/${userid}/${product?._id}`)
          
            alert(`${res.data.product.name} Added Into Cart Successfully...`)
            dispatch(getUserDataUpdationTrigger());


          }catch(err){
            alert("Item was not added...")

          }
        }
  return (
  
          <div className={`d-flex flex-column ${styles['descriptionMainCont']}`}>
                     <div className={`d-flex flex-column ${styles['price-availability-description-Cont']}`}>
                      <span className={`d-flex`} style={{color:'red',display:"flex",alignItems:"center"}}><del style={{color:'gray',display:"flex",alignItems:"center"}}><FaRupeeSign /> {product?.originalprice}</del><FaRupeeSign />{product?.discountprice}</span>

                      <span>
                        {product?.status}
                      </span>

                      <p>{product?.description}</p>
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
                        <Button onClick={()=>handleCart(product?._id)}><span><MdAddShoppingCart /></span> Add To Cart</Button>
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