import React, { useState } from 'react'
import styles from './ProductCard.module.css';
import { FaIndianRupeeSign, FaRupeeSign, FaRupiahSign } from 'react-icons/fa6'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { MdOutlineZoomOutMap } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import ProductModal from '../ProductModal/ProductModal';
import { Link } from 'react-router-dom';

function ProductCard({classnameProp}) {
    const [value, setValue] = React.useState(2);
     const [open, setOpen] = React.useState(false);
    
        const handleClickOpen = () => {
       
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
    
        }

     const srcObj = {
        src1:"https://thumbs.dreamstime.com/b/portrait-young-handsome-man-white-shirt-outdoor-portrait-young-handsome-man-white-shirt-outdoor-nice-appearance-131934608.jpg",
        src2:"https://i.pinimg.com/564x/9c/8e/27/9c8e278b1c19e23b10a397f98b15a44c.jpg"
     }
     const[srcInp,setSrcInp] = useState(srcObj.src1);
    
     const changSrcto2 = ()=>{
            
              setSrcInp(srcObj.src2);
           
     }
     const changSrcto1 = ()=>{
            
      setSrcInp(srcObj.src1);
   
}



  return (
    <>
    <div className={`${styles[classnameProp]} ${styles['main-product-card']}`}>
        <div className={`${styles[classnameProp]} card ${styles["cardCont"]}`} >
<Link to={'/productdetails'} className={styles['linkToDetails']}>
<div className={`${styles[classnameProp]} ${styles['imgCont']}`}>
<img src={srcInp} className={`card-img-top ${styles['card-cont-img']}`} alt="..." onMouseEnter={changSrcto2} onMouseLeave={changSrcto1}/>
</div>
</Link>

  <div className={`${styles['discountanddetailcont']}`}>
    <div className={`${styles['discountDiv']}`}>
          <span>10%</span>
    </div>
    <div className={`${styles['detailaddtocartcont']}`}>
        <span onClick={(e)=> {e.preventDefault(); e.stopPropagation(); handleClickOpen();}}><MdOutlineZoomOutMap /></span>
        <span><CiHeart /></span>
    </div>

  </div>
  <div className={`${styles[classnameProp]} card-body d-flex flex-column ${styles["cardDetails"]}`}>
    <h6>Means Alias Screat T-shirt</h6>
    <span className={``} style={{color:"green",fontWeight:'bold'}}>In-stock</span>
    <div>
    <Box sx={{ '& > legend': { mt: 4 } }}>
    {/* <Typography component="legend">Read only</Typography> */}
      <Rating name="read-only" value={value} readOnly />
          </Box>
    </div>
    <span style={{color:"red",fontWeight:'bold'}}><del style={{color:"gray",fontWeight:'bold',marginRight:'10px'}}><FaIndianRupeeSign/> 2500 </del><FaIndianRupeeSign/>  1500</span>
  </div>
</div>

{
  open && <ProductModal handleClose={handleClose} setOpen={setOpen}/>
}
    </div>
    </>
  )
}

export default ProductCard