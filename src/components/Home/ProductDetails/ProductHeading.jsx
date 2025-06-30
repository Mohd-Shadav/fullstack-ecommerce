import { Rating } from '@mui/material'
import React from 'react'

function ProductHeading() {
  return (
    <div>
        <h1>Men Alias-N Regular Fit Spread Collar Shirt
        </h1>

        <div className={`d-flex gap-5 align-items-center`}>
            <span>Brand: <strong>Rare Rabbit</strong></span>
           <div className="d-flex gap-3">
           <Rating name="read-only" value={5} readOnly  />
           <span style={{color:'gray'}}>11 Reviews</span>
           </div>
        </div>
    </div>
  )
}

export default ProductHeading