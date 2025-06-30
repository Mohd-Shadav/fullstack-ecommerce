import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Listing.module.css'
import { IoMdMenu } from 'react-icons/io'
import { Button } from '@mui/material'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { TfiLayoutGrid4Alt } from 'react-icons/tfi'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductCard from '../Home/LandingPageDocs/ProductCard'
import { MyContext } from '../../store/Context'

function Listing() {


    const context = useContext(MyContext);
  
    useEffect(()=>{
    context.setIsHeaderFooter(true);
    },[])
  const [grid,setGrid] = useState('4x4');
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  }
  const handleGridSelector = (item)=>{
        
     setGrid(item);
  }

  useEffect(()=>{
    console.log(grid);
  },[grid])
  return (
    <div className={`d-flex mt-3`}>

        <div className={`container ${styles["sidebar-contentRight-container"]}`}>
            <div className={`${styles['sidebar-container']}`}>
            <Sidebar/>
            </div>
            <div className={`${styles['content-right-container']} container mt-3`}>
               <div className={`${styles['header-content-right']}`}>
               <Button onClick={()=>handleGridSelector('1x1')} className={`${grid==='1x1'?styles['activeGrid']:''}`}><IoMdMenu /></Button>
               <Button onClick={()=>handleGridSelector('3x3')}className={`${grid==='3x3'?styles['activeGrid']:''}`}><BsFillGrid3X3GapFill /></Button>
               <Button onClick={()=>handleGridSelector('4x4')}className={`${grid==='4x4'?styles['activeGrid']:''}`}><TfiLayoutGrid4Alt style={{fontSize:'2rem'}}/></Button>
                <div className={`${styles['show-more-cont']}`}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Show More</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Show More"
        >
        
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </FormControl>
                </div>
               </div>

               <div className={`${styles['all-content-right-product']} ${styles[`grid-${grid}`]}`}>
                
                {Array.from({length:age}).map((item)=>{
                 return (
                  <ProductCard classnameProp={`grid-${grid}`} className={`${grid === '1x1' ? styles['grid1x1'] : grid === '3x3' ? styles['grid3x3'] : ''}`}/> 
                 )
                })

                }

               </div>
            </div>
        </div>
       
    </div>
  )
}

export default Listing