import { Rating } from '@mui/material'
import React, { useEffect } from 'react'

function ProductHeading({product}) {

 
  return (
    <div>
        <h1>{product?.name}
        </h1>

        <div className={`d-flex gap-5 align-items-center`}>
            <span>Brand: <strong>{product?.brand}</strong></span>
           <div className="d-flex gap-3">
           <Rating name="read-only" value={product?.rating || 0} readOnly />
           <span style={{color:'gray'}}>{product?.reviews?.length || 0} Reviews</span>
           </div>
        </div>
    </div>
  )
}

export default ProductHeading