import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./PaymentGateway.module.css";
function PaymentGateway({order}) {


    const userid = localStorage.getItem("userID");
    // const [deliveryAddress,setDeliveryAddress]=useState({});

    const [paymentCredentials,setPaymentCredentials] = useState({});

    const getuser = async ()=>{
        try{

            let res = await axios.get(`http://localhost:3000/api/users/get-user/${userid}`)

            const defaultAddress = res.data.address.find(item => item.isDefault) || res.data.address[0];

           
           
            setPaymentCredentials({
                user:userid,
                order:order,
                deliveryAddress:defaultAddress
            })


            
           

        }
        catch(err)
        {
            alert("failed to load data in payment gateway")
        }
    }

    useEffect(()=>{

   

        getuser()

             

    },[])


    // 3. Auto-create payment link when data is ready
  useEffect(() => {
    if (
      paymentCredentials.user &&
      paymentCredentials.order &&
      paymentCredentials.deliveryAddress
    ) {
      createPaymentLink();
    }
  }, [paymentCredentials]);

  // 4. Call backend
  const createPaymentLink = async () => {
    try {

 
      const res = await axios.post("http://localhost:3000/api/payment/create-payment-link", paymentCredentials,{withCredentials:true,headers:{
        "Content-Type":"application/json"
      }});


      if (res.status === 200) {
        window.location.href = res.data.link;
      } else {
        alert("Failed to create payment link");
      }
    } catch (err) {
      console.error(err);
      alert("Payment link creation error");
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem",margin:"5rem 0"}}>
     <div className={styles["loader"]}></div> 
      <h1>Redirecting to payment link...</h1>
    </div>
  )
}

export default PaymentGateway






