import React from 'react'
import styles from './SalesCard.module.css'
function SalesCard() {
  return (
    <div className={`${styles['saleCard']}`}>
        <img src="https://www.shutterstock.com/image-vector/big-sale-ad-banner-55-600nw-2283507551.jpg" alt="" />
    </div>
  )
}

export default SalesCard