import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const EmptyCartMessage = ({ onShopNowClick }) => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: { xs: 300, md: 400 },
            bgcolor: 'grey.100',
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            width: '100%',
        }}
    >
        <Stack
            spacing={2}
            alignItems="center"
            sx={{ width: '100%' }}
        >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 60, color: 'grey.500' }} />
            <Typography variant="h6" fontWeight="bold">
                Your Cart is Empty
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                Looks like you haven’t added anything yet.
            </Typography>
      <Link to={'/Listing'}>
            <Button
                variant="contained"
                color="primary"
                onClick={onShopNowClick}
                sx={{ mt: 2, px: 4, borderRadius: 2 }}
            >
                Shop Now
            </Button></Link>
        </Stack>
    </Box>
);

export default EmptyCartMessage;