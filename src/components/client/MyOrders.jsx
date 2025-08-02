    import axios from 'axios';
    import React, { useEffect, useState } from 'react';
    import styles from './MyOrders.module.css'
    import { Button } from '@mui/material';
 import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

    function MyOrders({order,idx}) {

        const [product,setProduct] = useState([]);


        const fetchProducts = async ()=>{

    let orderArr = await Promise.all(
  order.orderDetails.product.map(async (item) =>
    await axios.get(`http://localhost:3000/api/products/get-product/${item.productID}`)
  )
);

   

setProduct(orderArr.map((item)=>(
    item.data
)))
          

console.log(orderArr.map((item)=>(
    item.data
)))


        }


        useEffect(()=>{

    fetchProducts();


        },[order])


    
    return (
        <div className={styles["main-div-my-orders"]}>
            <div className={styles["image-product-div-my-orders"]}>
                {/* <img src={product?.images?.thumbnail} alt=""/> */}

                <AvatarGroup max={2}>
                  {product.map((item,index)=>(

  <Avatar  key={item._id || index} alt="Remy Sharp" sx={{width:"150px",height:"150px"}} src={item?.images?.thumbnail} />

))}

</AvatarGroup>

                <div className={styles["product-details-div"]}>
                    <span style={{color:"gray"}}>order ID: {order?.orderDetails?.orderId}</span>
                    <h3 style={{color:"#252525"}}>{product?.name}</h3>
                    <span style={{color:"gray"}} >Variant : <strong style={{color:"#252525"}}>{order?.orderDetails?.product?.[0]?.variant}</strong></span>
                    <span style={{color:"gray"}}>Quantity : <strong style={{color:"#252525"}}>{order?.orderDetails?.product?.[0]?.quantity}</strong></span>
                    <strong>₹ {order?.orderDetails?.price}</strong>
                </div>

            </div>


            <div className="">
                <span style={{color:"green"}}>Delivery Expected By 11 pm Today</span>
            </div>

            <div className={styles["order-status-div"]}>

                
                    <span style={{backgroundColor:order?.orderDetails?.status==="paid" ? "#c5fcc5ff":"red",color:"#252525c2",fontWeight:"600"}}>{order?.orderDetails?.status}</span>
                
                    <Button variant='contained' color='error'>Cancel</Button>
                    
        

            </div>
        </div>
    )
    }

    export default MyOrders