import React, { useContext, useEffect, useState } from 'react'
import HeroesSection from './HeroesSection'
import Products from './Products'
import FeaturedProducts from './FeaturedProducts'
import SaleElectronics from './SaleElectronics'

import { MyContext } from '../../../store/Context'
import GrocerySection from './GrocerySection'


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
      <GrocerySection/>
    

 
    </div>
  )
}

export default Home