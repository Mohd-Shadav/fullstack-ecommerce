import React, { useContext, useEffect, useState } from 'react'
import HeroesSection from './HeroesSection'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import SaleElectronics from './SaleElectronics'
import JewellerySection from './JewellerySection'

import { FaAngleUp } from 'react-icons/fa'
import styles from './Home.module.css'
import FooterComponent from '../../Footer/FooterComponent'
import { MyContext } from '../../../store/Context'


function Home() {
  
  const context = useContext(MyContext);

  useEffect(()=>{
  context.setIsHeaderFooter(true);
  },[])
     
  return (
    <div className=''>
      <HeroesSection/>
      <Products/>
      <FeaturedProducts/>
      <SaleElectronics/>
      <JewellerySection/>
    

 
    </div>
  )
}

export default Home