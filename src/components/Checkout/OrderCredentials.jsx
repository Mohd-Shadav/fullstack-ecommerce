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
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';

const OrderCredentials = () => {
  const [selectedAddress, setSelectedAddress] = useState('');
  const [open, setOpen] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: 'Home',
      addressLine: '123 Street, Delhi',
      city: 'Delhi',
      pincode: '110001',
      phone: '9876543210',
    },
    {
      id: 2,
      label: 'Office',
      addressLine: '456 Avenue, Mumbai',
      city: 'Mumbai',
      pincode: '400001',
      phone: '9876500000',
    },
  ]);

  const [formData, setFormData] = useState({
    label: '',
    addressLine: '',
    city: '',
    pincode: '',
    phone: '',
  });

  const handleAddressSelect = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => {
    setOpen(false);
    setFormData({
      label: '',
      addressLine: '',
      city: '',
      pincode: '',
      phone: '',
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    const newAddress = {
      ...formData,
      id: addresses.length + 1,
    };
    setAddresses([...addresses, newAddress]);
    setSelectedAddress(String(newAddress.id));
    handleDialogClose();
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Select Delivery Address
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Saved Addresses</FormLabel>
        <RadioGroup value={selectedAddress} onChange={handleAddressSelect}>
          {addresses.map((addr) => (
            <FormControlLabel
              key={addr.id}
              value={String(addr.id)}
              control={<Radio />}
              label={
                <Box>
                  <Typography fontWeight="bold">{addr.label}</Typography>
                  <Typography>{addr.addressLine}, {addr.city}</Typography>
                  <Typography>Pincode: {addr.pincode}</Typography>
                  <Typography>Phone: {addr.phone}</Typography>
                </Box>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Button variant="outlined" color="primary" onClick={handleDialogOpen} sx={{ mt: 2 }}>
        Add New Address
      </Button>

      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Add New Address</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField label="Label (e.g. Home, Office)" name="label" value={formData.label} onChange={handleFormChange} />
            <TextField label="Address Line" name="addressLine" value={formData.addressLine} onChange={handleFormChange} />
            <TextField label="City" name="city" value={formData.city} onChange={handleFormChange} />
            <TextField label="Pincode" name="pincode" value={formData.pincode} onChange={handleFormChange} />
            <TextField label="Phone Number" name="phone" value={formData.phone} onChange={handleFormChange} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderCredentials;
