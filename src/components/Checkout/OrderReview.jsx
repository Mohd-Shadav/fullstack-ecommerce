import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from '@mui/material';

const OrderReview = () => {
const [order,setOrder] = useState(JSON.parse(localStorage.getItem("orderDetails")))
    useEffect(()=>{

        console.log(order)
        
    },[])
  return (
    <Card sx={{ display: 'flex',flexDirection:"column",justifyContent:"center",alignItems:"center", gap: 2, p: 4, mb: 2, boxShadow: 0, borderRadius: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 250, height: 250, borderRadius: 2 }}
        image={order.productimage}
        alt={order.productname}
      />
      <CardContent sx={{ flex: 1}}>
        <Typography variant="h5" fontWeight="bold">
          {order.productname}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Variant: <strong>{order.variant}</strong>
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Quantity: <strong>{order.quantity}</strong>
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Price: ₹<strong>{order.price}</strong>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Rating
            name="read-only-rating"
            value={order.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {order.rating}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderReview;
