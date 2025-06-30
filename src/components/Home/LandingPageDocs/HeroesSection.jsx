import React from 'react'
import Slider from "react-slick";
import styles from './HeroesSection.module.css';

function HeroesSection() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
        autoplay:true,
        
      };
  return (

    <div className={styles['caruselContainer']}>
    <Slider {...settings}>
          
          <div className={styles['imgContDiv']}>
            <img src="https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png" alt="" />
          </div>
          <div className={styles['imgContDiv']}>
            <img src="https://cmsimages.shoppersstop.com/Watches_web_914c0225e1/Watches_web_914c0225e1.png" alt="" />
          </div>
          <div className={styles['imgContDiv']}>
            <img src="https://cmsimages.shoppersstop.com/WW_Main_Banners_web_98669c5889/WW_Main_Banners_web_98669c5889.png" alt="" />
          </div>
          <div className={styles['imgContDiv']}>
            <img src="https://cmsimages.shoppersstop.com/J_and_J_web_a66325f963/J_and_J_web_a66325f963.png" alt="" />
          </div>
          <div className={styles['imgContDiv']}>
            <img src="https://cmsimages.shoppersstop.com/Fragrances_web_dfeb94c95b/Fragrances_web_dfeb94c95b.png" alt="" />
          </div>
          <div className={styles['imgContDiv']}>
            <img src="https://cmsimages.shoppersstop.com/Puma_web_b46c9cedfa/Puma_web_b46c9cedfa.png" alt="" />
          </div>

        </Slider>
        </div>
  )
}

export default HeroesSection