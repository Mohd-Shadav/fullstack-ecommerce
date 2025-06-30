import React from 'react'
import styles from './NewsLetterSection.module.css'
import { FaSms } from 'react-icons/fa'
import { FaVoicemail } from 'react-icons/fa6'
import { Email } from '@mui/icons-material'
import { MdEmail } from 'react-icons/md'

function NewsLetterSection() {
  return (
    <section className={`${styles['newsLetterCont']} d-flex justify-content-around align-items-center`}>
       <div className={`${styles["descriptionCont"]} d-flex flex-column mt-4`}>
           <h5>10% discount for your first order</h5>
           <h2>Join our newsletter and get...</h2>
           <p>Join our email subscription now to get updates on
           promotions and coupons.</p>

           <div className={`${styles['inputCont']}`}>
            <MdEmail />
            <input type="email" name="" id="" placeholder='Enter Your Email' />
            <button>Subscribe</button>
           </div>
       </div>
       <div className={`${styles['imageCont']}`}>
        <img src="https://fullstack-ecommerce.netlify.app/static/media/newsletter.5931358dd220a40019fc.png" alt="image" />
       </div>
    </section>
  )
}

export default NewsLetterSection