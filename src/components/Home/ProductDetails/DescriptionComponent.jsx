import React from 'react'

function DescriptionComponent({product}) {
  return (
    <div className='mt-5'>
    {product.description}
    </div>
  )
}

export default DescriptionComponent