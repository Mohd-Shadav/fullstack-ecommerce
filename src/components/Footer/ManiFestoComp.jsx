import React from 'react'
import { CiDeliveryTruck, CiDiscount1 } from 'react-icons/ci'
import { IoIosPricetag } from 'react-icons/io'
import { LuShirt } from 'react-icons/lu'
import styles from './ManiFestoComp.module.css'

function ManiFestoComp() {
  return (
    <div className={`container d-flex py-4 justify-content-center ${styles['mainCont']}`}>
        <div className={`${styles['AllDivs']}`}>
            <span>
            <LuShirt />
            </span>
            <span>Everyday fresh products</span>
        </div>
        <div className={`${styles['AllDivs']}`}>
        <span>
        <CiDeliveryTruck />
        </span>
        <span>Free delivery for order over $70</span>
        </div>
        <div className={`${styles['AllDivs']}`}>
        <span>
        <CiDiscount1 />
        </span>
        <span>Daily Mega Discounts</span>
        </div>
        <div className={`${styles['AllDivs']}`}>
        <span>
        <IoIosPricetag />
        </span>
        <span>Best price on the market</span>
        </div>
    </div>
  )
}

export default ManiFestoComp