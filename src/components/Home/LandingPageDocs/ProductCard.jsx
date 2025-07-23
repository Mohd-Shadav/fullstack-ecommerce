import React, { useEffect, useState } from 'react'
import styles from './ProductCard.module.css';
import { FaIndianRupeeSign, FaRupeeSign, FaRupiahSign } from 'react-icons/fa6'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import ProductModal from '../ProductModal/ProductModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUserDataUpdationTrigger } from '../../../store/reduxSlice';

function ProductCard({classnameProp,product}) {
    const [value, setValue] = React.useState(2);
     const [open, setOpen] = React.useState(false);
     const[productId,setProductId] = useState(0);
     const user = useSelector((state)=>state.userData.value)

     const dispatch = useDispatch();
    
        const handleClickOpen = () => {
       
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
    
        }

     const srcObj = {
        src1:product?.images?.thumbnail,
        src2:product?.images?.gallery[0]
     }
     const[srcInp,setSrcInp] = useState(srcObj.src1);
    
     const changSrcto2 = ()=>{
            
              setSrcInp(srcObj.src2);
           
     }
     const changSrcto1 = ()=>{
            
      setSrcInp(srcObj.src1);
   
}

     const handleCart = async (id)=>{
          try{

          
            let res = await axios.post(`http://localhost:3000/api/users/addtocart/${user._id}/${id}`)
           
            alert(`${res.data.product.name} Added Into Cart Successfully...`)
            dispatch(getUserDataUpdationTrigger());


          }catch(err){
            alert("Item was not added...")

          }
        }

useEffect(()=>{
  


setProductId(product?._id);
},[])


  return (
    <>
<div className={`${styles['main-product-card']} ${classnameProp ? styles[classnameProp] : ''}`}>
  <div className={`card ${styles['cardCont']} ${classnameProp ? styles[classnameProp] : ''}`}>
    <Link to={`/productdetails/${productId}`} className={styles['linkToDetails']}>
      <div className={`${styles['imgCont']} ${classnameProp ? styles[classnameProp] : ''}`}>
        <img
          src={srcInp}
          className={`card-img-top ${styles['card-cont-img']}`}
          alt="..."
          onMouseEnter={changSrcto2}
          onMouseLeave={changSrcto1}
        />
      </div>
    </Link>

    <div className={styles['discountanddetailcont']}>
      <div className={styles['discountDiv']}>
        <span>10%</span>
      </div>
      <div className={styles['detailaddtocartcont']}>
        <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleClickOpen(); }}>
          <MdOutlineZoomOutMap />
        </span>
        <span onClick={()=>handleCart(product?._id)}> <CiHeart /> </span>
      </div>
    </div>

    <div className={`card-body d-flex flex-column ${styles['cardDetails']} ${classnameProp ? styles[classnameProp] : ''}`}>
      <h6>{product?.name || "Loading..."}</h6>
      <span style={{ color: "green", fontWeight: 'bold' }}>{product?.status || "Loading..."}</span>
      <div>
        <Box sx={{ '& > legend': { mt: 4 } }}>
         <div className="" style={{display:"flex",alignItems:"center",gap:"10px"}}>
           <Rating name="read-only" precision={0.1} value={product?.rating || 4} readOnly /> ({product?.rating})
         </div>
        </Box>
      </div>
      <span style={{ color: "red", fontWeight: 'bold', display: "flex", alignItems: "center" }}>
        <del style={{ color: "gray", fontWeight: 'bold', marginRight: '10px', display: "flex", alignItems: "center" }}>
          <FaIndianRupeeSign /> {product?.originalprice || "***"}
        </del>
        <FaIndianRupeeSign /> {product?.discountprice || "***"}
      </span>
    </div>
  </div>

  {open && (
    <ProductModal
      handleClose={handleClose}
      setOpen={setOpen}
      product={product}
    />
  )}
</div>

    </>
  )
}

export default ProductCard