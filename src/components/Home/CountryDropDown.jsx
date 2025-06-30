import React, { useEffect, useState,useRef } from 'react'
import styles from './CountryDropDown.module.css'
import { Button } from "@mui/material";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CountryDropDownContext } from '../../store/Context';
import { useContext } from 'react';

import Slide from '@mui/material/Slide';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


function CountryDropDown() {

    const context = useContext(CountryDropDownContext);
    const [selectedCountry,setSelectedCountry] = useState('India');
    const [filterCountry,setFilterCountry] = useState(context.countryList)
    const countryRef = useRef();
    const [valueInp,setValueInp] = useState(selectedCountry);
    const [open, setOpen] = React.useState(false);

      
        const handleClickOpen = (e) => {
        
          setOpen(true);
        };
        const handleClose = () => {
  
           setOpen(false);

       
        };

    


        const handleClick = (index)=>{
          setSelectedCountry(filterCountry[index].country);
          handleClose();
        }

        const handleCountryList = ()=>{
        
          setValueInp(countryRef.current.value);

          const newList = context.countryList.filter((item)=>{
            return item.country.toLowerCase().includes(countryRef.current.value.toLowerCase());

       
          })

          setFilterCountry(newList);
        }

      
       
    
  return (  <>
     <div className={styles["countryDropDown"]}>
               <Button
                 className={`${styles["countrydropdownbtn"]} d-flex justify-content-start gap-3`} onClick={handleClickOpen} variant="outlined"
               >
                 <div className="d-flex flex-column">
                   <span className={styles["locHeading"]}>Your Location</span>
                   <span className={styles["location"]}>{selectedCountry.length>10?selectedCountry.substr(0,10)+'...':selectedCountry}</span>
                 </div>
                 <span className="ml-auto">
                   <FaAngleDown />
                 </span>
               </Button>


             </div>
<BootstrapDialog
onClose={handleClose}
aria-labelledby="customized-dialog-title"
open={open}
TransitionComponent={Transition}
keepMounted
>
<DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
<div className="mx-4">
<h3>Choose Your Delivery Location</h3>
<p className='fs-6'>Enter your address and we will specify the offer for your area.</p>
</div>
  
</DialogTitle>

<IconButton
  aria-label="close"
  onClick={handleClose}
  sx={(theme) => ({
    position: 'absolute',
    right: 8,
    top: 8,
    color: theme.palette.grey[500],
  })}
>
  <CloseIcon />
</IconButton>
<DialogContent dividers>
  
  <div className={`${styles['DialogContent']}`}>

    <div className={`${styles["searchCountry"]} d-flex `}>
    <input ref={countryRef} type="text" name="countryinput" onChange={handleCountryList} value={valueInp} placeholder='Search Your Location' />
    <span onClick={handleCountryList}><FaSearch/></span>
    </div>


    <div className={`${styles['countriesName']} d-flex flex-column`}>
        
        {
          filterCountry.map((item,index)=>{
            return (
              <span key={index} onClick={()=>handleClick(index)} >{item.country}</span>
            )
          })
        }
     
    </div>

  </div>
   

</DialogContent>

</BootstrapDialog>

</>
  )
}

export default CountryDropDown;