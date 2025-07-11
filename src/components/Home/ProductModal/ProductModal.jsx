import React, { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';
import styles from './ProductModal.module.css';
import { Rating } from '@mui/material';
import { RxCross2 } from 'react-icons/rx';
import {FaBuyNLarge, FaHeart} from 'react-icons/fa'

import { CiZoomIn } from 'react-icons/ci';
import ImageDisplayer from './ImageDisplayer';
import ProductDescription from './ProductDescription';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ProductModal({handleClose,setOpen,product}) {




    handleClose = ()=>{
        setOpen(false);
    }



   
    

 
  return (
    <div>
            <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        className={`productModal`}
        
      
      >
      <div className={styles['mainContentDialog']}>
           <div className={`d-flex justify-content-between ${styles['headingCont']}`}>
                  <div className={``}>
                    <h5>{product.name}</h5>
                    <div className={`d-flex gap-5`}>
                      <div className={``}>
                        BRAND: <span>{product.brand}</span>
                      </div>
                      <div className={``}>
                      <Rating name="read-only" value={product.rating} readOnly />
                      </div>
                    </div>
                  </div>
                  <Button onClick={handleClose} className={`${styles['crossBtn']} align-self-start`}><RxCross2 /></Button>
           </div>

           <div className={styles['contentDialogBox']}>
               
               <ImageDisplayer thumbnail={product?.images.thumbnail} gallery={product?.images.gallery}/>

                 <ProductDescription product={product}/>
           </div>
      </div>
      </Dialog>
    </div>
  )
}

export default ProductModal