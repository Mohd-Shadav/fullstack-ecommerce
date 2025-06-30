import React, { useState } from 'react'
import styles from './ProductOverview.module.css'
import { Button } from '@mui/material'
import AdditionaInfo from './AdditionaInfo'
import ReviewsComponent from './ReviewsComponent'
import DescriptionComponent from './DescriptionComponent'

function ProductOverview() {

    const [btnSelector,setBtnSelector] = useState('Description')

    const handleBtnEffect = (e)=>{
        console.log(e.target.textContent);
        setBtnSelector(e.target.textContent);
    }
  return (
    <div className={`${styles['product-overview-main-cont']}`}>

        <div className={`${styles['btns-cont']}`} onClick={handleBtnEffect} >
            <Button className={btnSelector==='Description'?styles['descriptionBtn']:""}>Description</Button>
            <Button className={btnSelector==='Additional Info'?styles['additionInfoBtn']:""}>Additional Info</Button>
            <Button className={btnSelector==='Reviews (11)'?styles['reviewsBtn']:""}>Reviews <span className='mx-1'>(11)</span></Button>
        </div>

        <div className="">
            
          {      btnSelector==='Description'?(
                    <DescriptionComponent/>
                ):btnSelector === 'Additional Info' ? (
                    <AdditionaInfo/>
                ):(
                    <ReviewsComponent/>
                )
            }
           
        </div>
    </div>
  )
}

export default ProductOverview