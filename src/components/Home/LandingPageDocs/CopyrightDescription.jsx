import React from 'react'
import { FaFacebookF, FaInstagramSquare, FaTwitter } from 'react-icons/fa'
import styles from './CopyRightDescription.module.css'

function CopyrightDescription() {
  return (
    <div className='container d-flex justify-content-between p-0 mt-4 mb-4'>

        <span>Copyright 2025. All rights reserved</span>

        <div className="d-flex gap-2 justify-content-center align-items-center">
            <div className={`${styles['iconDiv']}`}><FaFacebookF /></div>
            <div className={`${styles['iconDiv']}`}><FaTwitter /></div>
            <div className={`${styles['iconDiv']}`}><FaInstagramSquare /></div>
        </div>

    </div>
  )
}

export default CopyrightDescription