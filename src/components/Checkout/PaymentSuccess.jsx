import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress, Paper } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #e0f7fa, #fff)',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 5,
          textAlign: 'center',
          maxWidth: 500,
          borderRadius: '20px',
        }}
      >
        <CheckCircleOutlineIcon
          sx={{ fontSize: 70, color: 'green', marginBottom: 2 }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Payment Successful!
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          Thank you for your order. You’ll be redirected to the homepage shortly.
        </Typography>
        <CircularProgress color="success" />
      </Paper>
    </Box>
  );
};

export default PaymentSuccess;
