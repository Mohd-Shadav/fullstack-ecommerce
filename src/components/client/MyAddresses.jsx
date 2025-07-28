import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';

function MyAddresses() {
     const [selectedAddress, setSelectedAddress] = useState('');
       let userid = localStorage.getItem("userID");
    const [isSaveAddress,setIsSaveAddress] = useState(false)

      const [open, setOpen] = useState(false);
      const [addresses, setAddresses] = useState([]);
    
      const [formData, setFormData] = useState({
        houseno:"",
        street:"",
        landmark:"",
        city: '',
        district:"",
        state:"",
        country:"",
        pincode: '',
        mobile: 0,
      });
    
      const handleAddressSelect =async (event) => {
        // setSelectedAddress(event.target.value);
        

        try{
            let res = await axios.post(`http://localhost:3000/api/users/${userid}/set-default-address/${event.target.value}`);

           


           const defaultAddress = res.data.addresses.findIndex((item) => item.isDefault);

         
            setSelectedAddress(defaultAddress)

        }catch(err){
            alert("selcted address error")
        }

      };
    
      const handleDialogOpen = () => setOpen(true);
      const handleDialogClose = () => {
        setOpen(false);
        // setFormData({
        //    houseno:"",
        // street:"",
        // landmark:"",
        // city: '',
        // district:"",
        // state:"",
        // country:"",
        // pincode: '',
        // mobile: '',
        // });
      };
    
      const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleFormSubmit =async () => {

        console.log(formData)



      
    try{

        let res = await axios.post(`http://localhost:3000/api/users/save-address/${userid}`,formData,{
            withCredentials:true,
            
        })


       

        setIsSaveAddress((prev)=>!prev);

        

    }catch(err)
    {
        alert("User Address was not added");
    }
    
        const newAddress = {
          ...formData,
          id: addresses.length + 1,
        };
        setAddresses([...addresses, newAddress]);
        setSelectedAddress(String(newAddress.houseno));
        handleDialogClose();
      };

      const handleRemoveAddress =async (idx)=>{

        try{

            await axios.delete(`http://localhost:3000/api/users/${userid}/remove-address/${idx}`);

               setIsSaveAddress((prev)=>!prev);

        }catch(err)
        {
            console.log("Failed to delete address")
        }

      }


      const getUser = async()=>{
        try{


            let res = await axios.get(`http://localhost:3000/api/users/get-user/${userid}`)

            if(res.data.address.length===1)
            {
                setSelectedAddress(0);
            }
            else{
                const defaultAddress = res.data.address.findIndex((item) => item.isDefault);
    
             
                setSelectedAddress(defaultAddress)

            }



           
            setAddresses(res.data.address);
        }catch(Err)
        {
            alert("User was not fetched")
        }
      }

      useEffect(()=>{

        getUser();
     


      },[isSaveAddress,selectedAddress])
  return (
     <Box sx={{ mx: 'auto', p: 2 ,display:"flex",justifyContent:"space-between",width:"50%"}}>
      <div className="">

        <Typography variant="h6" gutterBottom>
        Select Delivery Address
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Saved Addresses</FormLabel>

        <hr />
        <RadioGroup value={selectedAddress} onChange={handleAddressSelect} sx={{display:"flex",flexDirection:"column",gap:"2rem"}}>
          {addresses.length>0 ? (addresses.map((addr,idx) => (
               <Box key={idx} display="flex" alignItems="start" justifyContent="space-between">
            <FormControlLabel
              key={idx}
              value={String(idx)}
              control={<Radio />}
              label={
                <Box>
                  <Typography fontWeight="bold">{addr.type}</Typography>
                  <Typography>{addr.houseno},{addr.street} near {addr.landmark} {addr.city},{addr.district},{addr.state},{addr.country}</Typography>
                  <Typography>Pincode: {addr.pincode}</Typography>
                  <Typography>Mobile: {addr.mobile}</Typography>
                </Box>

                
              }

              
            />

             <IconButton
          onClick={()=>handleRemoveAddress(idx)}
          color="error"
          aria-label="delete address"
          sx={{ mt: 1 }}
        >
          <CloseIcon />
        </IconButton>

            </Box>
          ))): (
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"rgba(83, 2, 66, 1)"}}>
                <h2>No Saved Address Found</h2>
            </div>
          )}
        </RadioGroup>
      </FormControl>

      </div>
      <Button variant="contained" color="primary" onClick={handleDialogOpen} sx={{ mt: 2,width:"300px",height:"50px" }}>
        Add New Address
      </Button>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Add New Address</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>

            <div className="" style={{display:"flex",gap:"1rem"}}>
  <TextField label="House no." name="houseno" value={formData.houseno} onChange={handleFormChange} />
              <TextField label="Street" name="street" value={formData.street} onChange={handleFormChange} />
            </div>

            
            <div className="" style={{display:"flex",gap:"1rem"}}>
                 <TextField label="Landmark" name="landmark" value={formData.landmark} onChange={handleFormChange} />
            <TextField label="Pincode" name="pincode" value={formData.pincode} onChange={handleFormChange} />

            </div>

            
            <div className="" style={{display:"flex",gap:"1rem"}}>
                 <TextField label="City" name="city" value={formData.city} onChange={handleFormChange} />
            <TextField label="District" name="district" value={formData.district} onChange={handleFormChange} />

            </div>

            
            <div className="" style={{display:"flex",gap:"1rem"}}>
                   <TextField label="State" name="state" value={formData.state} onChange={handleFormChange} />
             <TextField label="Country" name="country" value={formData.country} onChange={handleFormChange} />
                

            </div>

            
         
           
              
           
         
                <FormLabel id="demo-row-radio-buttons-group-label">Type : </FormLabel>
                <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="type"

        onChange={handleFormChange}
      >
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      
      </RadioGroup>
            <TextField label="Mobile Number" name="mobile" value={formData.mobile} onChange={handleFormChange} />

            
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default MyAddresses