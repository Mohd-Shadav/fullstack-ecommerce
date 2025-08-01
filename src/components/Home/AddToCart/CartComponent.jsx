import React, { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus, FaRupeeSign } from "react-icons/fa";
import styles from "./CartComponent.module.css";
import { Button, Rating } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { IoBagCheckOutline } from "react-icons/io5";
import { MyContext } from "../../../store/Context";
import axios from "axios";
import EmptyCartMessage from "../../NoResultFound/EmptyCartMessage";
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { buyingItemDetails, getUserDataUpdationTrigger } from "../../../store/reduxSlice";


function CartComponent() {
  const context = useContext(MyContext);

  const [userid, setUserId] = useState(localStorage.getItem("userID"));
  const userrr = useSelector((state)=>state.userData.value)

  const dispatch = useDispatch();

  const [cartItems, setCartItems] = useState();

  const [totalAmount, setTotalAmount] = useState(0);
  const [subTotalAmount,setSubTotalAmount] = useState(0)

  const [shippingAmount,setShippingAmount] = useState(0)
  const [handleRendering,setHandleRendering] = useState(false)

  



const QuantityIncrement = async(id)=>{

  try{

    let res = await axios.post(`http://localhost:3000/api/users/cart/incrementquantity/${userid}/${id}`)

    setHandleRendering((prev)=>!prev)
  }catch(err)
  {
    alert("quantity increment failed")
  }

}


const QuantityDecrement = async(id)=>{

  try{

    let res = await axios.post(`http://localhost:3000/api/users/cart/decrementquantity/${userid}/${id}`)
    setHandleRendering((prev)=>!prev)

  }catch(err)
  {
    alert("quantity decrement failed")
  }

}


const handleRemoveItem = async(id)=>{
  try{

    let res = await axios.delete(`http://localhost:3000/api/users/cart/removeitem/${userid}/${id}`)
    getUsers();
    setHandleRendering((prev)=>!prev)
    dispatch(getUserDataUpdationTrigger());

  }catch(err)
  {
    alert("Item Removing Failed...")
  }

}
  const getUsers = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3000/api/users/get-user/${userid}`
      );

      setCartItems(res.data.cart);
   

       
      
      
       
      
    } catch (err) {
      alert("user not fetched...");
    }
  };


const handleBuyItem = (id) => {
  let data = cartItems.find((item) => item?.product?._id === id);

  if (!data) {
    console.warn("No item found for ID:", id);
    return;
  }

  const objBuyItem = {
    productid: data.product._id,
    productname: data.product.name,
    productimage: data.product.images?.thumbnail,
    rating: data.product.rating,
    quantity: data.quantity,
    variant: "",
    price: data.product.discountprice * data.quantity,
  };

  dispatch(buyingItemDetails(objBuyItem));

  localStorage.setItem("orderDetails", JSON.stringify(objBuyItem));
};



const handleCheckout = async()=>{

  console.log(cartItems);
}


  useEffect(()=>{

    if(localStorage.getItem("userID"))
    {
      getUsers();
    }
    

  },[handleRendering])

  
  useEffect(() => {
    context.setIsHeaderFooter(true);


    if (!cartItems || cartItems.length === 0) {
    setSubTotalAmount(0);
    setShippingAmount(0);
    setTotalAmount(0);
    return;
  }

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.product.discountprice,
    0
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  setSubTotalAmount(subtotal);
  setShippingAmount(shipping);
  setTotalAmount(total);
}, [cartItems]);

  return (
    <section className="container mt-3">
      <div className={`row`}>
        <h4 className={`fs-3 fw-bold`}>Your Cart</h4>
        <p>
          There are{" "}
          <strong style={{ color: "red" }}>{cartItems?.length}</strong> Products
          in your cart.
        </p>
      {cartItems?.length>0?(
          <div className={`col-9`}>
          <div className="table-responsive">
            <table className={`table w-100`}>
              <thead className={`${styles["table-head"]}`}>
                <tr>
                  <th width="45%">Product</th>
                  <th width="15%">Unit Price</th>
                  <th width="20%">Quantity</th>
                  <th width="15%">Subtotal</th>
                  <th width="5%">Remove</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className={`${styles["table-body"]}`}>
                {cartItems?.map((item, index) => (
            
                  <tr className="">
                    <td>
                      <div className="d-flex gap-3">
                         <Link to={`/productdetails/${item?.product?._id}`} style={{textDecoration:"none",color:"#252525"}}>
                             <div className="d-flex gap-3">
                        <img
                          src={item?.product?.images?.thumbnail}
                          alt="product_iamge"
                          width={50}
                          style={{objectFit:"cover",objectPosition:"center"}}
                        />
                        <div className="d-flex flex-column">
                          <h6>{item.product.name}</h6>
                          <Rating value={item.product.rating} readOnly />
                        </div>
</div>
                        </Link>
                      </div>
                    </td>
                    <td>
                       <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                            <FaRupeeSign /> {item.product.discountprice}
                      </span>
                     
                    </td>
                    <td>
                      <div className={`d-flex ${styles["counterCont"]}`}>
                        <Button
                          onClick={() => {
                            if (item?.quantity > 1) QuantityDecrement(item?.product._id)
                          }}
                        >
                          <FaMinus />
                        </Button>
                        <span>{item?.quantity}</span>
                        <Button onClick={() => QuantityIncrement(item?.product._id)}>
                          <FaPlus />
                        </Button>
                      </div>
                    </td>
                    <td>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <FaRupeeSign />
                      {item.product.discountprice * item.quantity}
                      </span>
                     
                    
                    </td>
                    <td>
                     <Button color="error" onClick={()=>handleRemoveItem(item?.product._id)}> <RxCross2 /></Button>
                    </td>
                    <td>
                     <Link to={'/checkout'}>
                     
                      <Button color="primary" variant="contained" onClick={()=>handleBuyItem(item?.product?._id)}>Buy</Button>
                     </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ):(
        <div className={`col-9`}>
         <EmptyCartMessage/>
        </div>
      )}
        <div className={`col-3`}>
          <div className="p-4 d-flex flex-column gap-3 shadow border rounded">
            <div className=" border-bottom border-secondary">
              <h6 className="fw-bolder text-uppercase text-secondary">
                Cart Totals
              </h6>
            </div>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span  style={{ display: "inline-flex", alignItems: "center", gap: "4px" ,color:"red"}}>
                <FaRupeeSign /> {subTotalAmount}
              </span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}><FaRupeeSign />{shippingAmount}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Estimate For</span>
              <span>{userrr?.address?.[0].city.toUpperCase()},{userrr?.address?.[0].district.toUpperCase()}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total</span>
              <span  style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                <FaRupeeSign />
                {totalAmount}
              </span>
            </div>
         <Link to={''}>
            <Button className={`${styles["btn-checkout"]}`} onClick={handleCheckout}>
              {" "}
              <span>
                <IoBagCheckOutline />
              </span>{" "}
              Checkout
            </Button>
         </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartComponent;
