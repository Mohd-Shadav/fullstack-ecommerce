    import axios from 'axios';
    import React, { useEffect, useState } from 'react';
    import styles from './MyOrders.module.css'
    import { Button } from '@mui/material';
 import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

    function MyOrders({order:initialOrder,idx}) {


        const [order,setOrder] = useState(initialOrder)

        const [updation,setUpdation] = useState(false)

        const cancelledOrder = async ()=>{

            if(confirm("Do you want to delete this item?"))
            {
                try {
                         await axios.patch(`http://localhost:3000/api/orders/update-status/${order._id}`, {
                           status: "Cancelled",
                           source:"user"
                         });

                         setUpdation(!updation);

                           setOrder(prev => ({
        ...prev,
        orderStatus: "Cancelled",
        source: "user"
      }));

                         alert("Item has been deleted Successfully")
                       }catch(err)
                       {
                           alert("Your order has not been cancelled")
                       }

            }
        }


        useEffect(()=>{


        },[updation])

     

     

    
    return (
        <div className={styles["main-div-my-orders"]}>
            <div className={styles["image-product-div-my-orders"]}>
                {/* <img src={product?.images?.thumbnail} alt=""/> */}

                <AvatarGroup max={2}>
                  {order.items.map((item,index)=>(

  <Avatar  key={item._id || index} alt="Remy Sharp" sx={{width:"150px",height:"150px"}} src={item?.product?.images?.thumbnail} />

))}

</AvatarGroup>

                <div className={styles["product-details-div"]}>
                    <span style={{color:"gray",textWrap:"nowrap"}}>order ID: <strong style={{color:"#252525"}}>{order?.orderId}</strong></span>


 {order.items.length <= 1 ? (
    <div className="" style={{display:"flex",flexDirection:"column"}}>

                 <h4 style={{color:"#252525e0",margin:"1rem 0"}}>{order.items[0]?.product?.name}</h4>
                    <span style={{color:"gray"}} >Variant : <strong style={{color:"#6e6e6eff"}}>{order.items[0].variant}</strong></span>
                    <span style={{color:"gray"}}>Quantity : <strong style={{color:"#6e6e6eff"}}>{order.items[0].quantity}</strong></span>

    </div>

 ) : <div className=""  style={{display:"flex",flexDirection:"column"}} >
  <h4 style={{ color: "#252525e0",margin:"1rem 0"}}>
    {order.items[0].product.name} & ...
  </h4>

  <span style={{ color: "gray" }}>
    Variant: <strong style={{color:"#6e6e6eff"}}>
      {order.items.map(item => item?.variant).join(" + ")}
    </strong>
  </span>

  <span style={{ color: "gray" }}>
    Quantity: <strong style={{color:"#6e6e6eff"}}>
      {order.items.map(item => item.quantity).join(" + ")}
    </strong>
  </span>
</div>      }
                    <strong style={{color:"rgba(255, 0, 0, 0.57)"}}>₹ {order?.totalAmount}</strong>
                </div>

            </div>


            <div className="" style={{display:"flex",gap:"20px"}}>
                <span style={{color:"grey"}}>{new Date(order.placedAt).toLocaleString()}</span>
                <span style={{color:"green"}}>Delivery Expected By 11 pm Today</span>
            </div>

            <div className={styles["order-status-div"]}>

                
                    <span style={{
    backgroundColor:
      order?.orderStatus === "Booked"
        ? "	#fdfdd5ff"
        : order?.orderStatus === "Shipped"
        ? "	#b0e0e6"
        : order?.orderStatus === "Delivered"
        ? "#c5fcc5ff"
        : "	#fd9dabff",
    color:'#252525c2',
    fontWeight: "600",
  }}>{order?.orderStatus}</span>
                    <span style={{backgroundColor:order?.paymentStatus==="paid" ? "#c5fcc5ff":"red",color:"#252525c2",fontWeight:"600"}}>{order?.paymentStatus}</span>
                    <Button disabled={order.orderStatus==="Cancelled"?  true : order.orderStatus==="Delivered" ?true : false} variant='contained' color='error' onClick={cancelledOrder}>Cancel</Button>
                    
        

            </div>
        </div>
    )
    }

    export default MyOrders