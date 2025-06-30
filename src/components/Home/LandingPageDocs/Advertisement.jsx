import React from 'react'
import styles from './Advertisement.module.css';

function Advertisement() {
  return (
    <div className={`${styles["AdvertiseMainCont"]} d-flex flex-column`}>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC00-_hv8Vr6UugqelpLvaKE-VVSMghtwBaQ&s" alt="" />
    </div>
    <div>
        <img src="https://img.freepik.com/free-vector/beautiful-cosmetic-ad_23-2148471068.jpg" alt="" />
    </div>
    </div>
  )
}

export default Advertisement