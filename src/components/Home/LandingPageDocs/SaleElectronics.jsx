import React from 'react'
import SalesCard from './SalesCard'
import styles from './SaleElectronics.module.css'

function SaleElectronics() {
  return (
    <div className={`container d-flex gap-3 mt-4 ${styles['salesElectronicsCont']}`}>
        <SalesCard/>
        <SalesCard/>
        <SalesCard/>

    </div>
  )
}

export default SaleElectronics