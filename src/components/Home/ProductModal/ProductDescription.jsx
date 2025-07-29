import React, { useState, useEffect } from 'react';
import styles from './ProductDescription.module.css';
import { FaMinus, FaPlus, FaRupeeSign, FaShoppingCart } from 'react-icons/fa';
import Button from '@mui/material/Button';
import { MdAddShoppingCart } from 'react-icons/md';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { buyingItemDetails, getUserDataUpdationTrigger } from '../../../store/reduxSlice';
import { Link } from 'react-router-dom';

function ProductDescription({ product }) {
  const [sizes, setSizes] = useState('');
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState(0);
  const [handleRendering, setHandleRendering] = useState(false);
  const [variants, setVariants] = useState([]);
  const userid = localStorage.getItem("userID");
  const dispatch = useDispatch();


  const [buyItem, setBuyItem] = useState({
    productid:product?._id,
    productname: product?.name,
    productimage: product?.images?.thumbnail,
    rating: product?.rating,
    quantity: count,
    variant: sizes,
    price: product?.discountprice * count
  });

  const handleSizes = (variant) => {
    setSizes(variant);
    setBuyItem((prev)=>({
      ...prev,
      variant:variant
    }))
  };

  const handleCount = (operation)=>
  {
    const val = count+operation
    setCount((prev)=>prev+operation)
     setBuyItem((prev)=>({
      ...prev,
       quantity:val,
       price:product?.discountprice*val
    }))

  }

  const getUsers = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/users/get-user/${userid}`);
      setCartItems(res.data.cart);

      const sizesObj = product?.physicalSpecs?.size;
   
      const volumes = product?.physicalSpecs?.volume;
      const weights = product?.physicalSpecs?.weight;

      // 1. Sizes with stock
         if (sizesObj && Object.keys(sizesObj).some((key) => sizesObj[key] > 0)) {
      const availableSizes = Object.keys(sizesObj).filter((key) => sizesObj[key] > 0);
      setVariants(availableSizes); // like ['S', 'L']
      setSizes(availableSizes[0]);
       setBuyItem((prev) => ({
    ...prev,
    variant: availableSizes[0],
  }));
    }
      // 2. Volume values
      else if (Array.isArray(volumes) && volumes.length > 0) {
        const mappedVolumes = volumes.map(v => `${v} ml`)
        setVariants(mappedVolumes);
        setSizes(mappedVolumes[0]);

        setBuyItem((prev)=>({
          ...prev,
          variant:mappedVolumes[0]
        }))
      }
   
     
      // 4. Fallback
      else {
        setVariants([]);
      }

    } catch (err) {
      alert("User not fetched...");
    }
  };

  const handleCart = async (id) => {
    try {
      const userid = localStorage.getItem("userID");
      const res = await axios.post(`http://localhost:3000/api/users/addtocart/${userid}/${id}/${Number(count)}`);

    
      alert(`${res.data.product.name} Added Into Cart Successfully...`);
      dispatch(getUserDataUpdationTrigger());
    } catch (err) {
      alert("Item was not added...");
    }
  };

  const handleBuyItem = () => {
   
   
        dispatch(buyingItemDetails(buyItem));
        localStorage.setItem("orderDetails",JSON.stringify(buyItem))

};

  useEffect(() => {
    getUsers();
  }, [handleRendering]);

  // Decide the variant label (Size/Volume/Weight/Variant)
  const getVariantLabel = () => {
    if (variants.length === 1 && variants[0] === "") return "Variant:";
    if (variants.some(v => ["S", "M", "L", "XL"].includes(v))) return "Size:";
    if (variants[0]?.includes("ml")) return "Volume:";
    if (variants[0]?.includes("g")) return "Weight:";
    return "Variant:";
  };

  return (
    <div className={`d-flex flex-column ${styles['descriptionMainCont']}`}>
      <div className={`d-flex flex-column ${styles['price-availability-description-Cont']}`}>
        <span style={{ color: 'red', display: "flex", alignItems: "center" }}>
          <del style={{ color: 'gray', display: "flex", alignItems: "center" }}>
            <FaRupeeSign /> {product?.originalprice}
          </del>
          <FaRupeeSign />{product?.discountprice}
        </span>
        <span>{product?.status}</span>
        <p>{product?.description}</p>
      </div>

      <div className={`${styles['size-addtocart-buy-cont']}`}>
        {variants.length > 0 && (
          <div className={`d-flex ${styles['sizeCont']}`}>
            <span style={{marginTop:"10px"}}>{getVariantLabel()}</span>
            <div>
              {variants.map((item) => (
                <span
                  key={item}
                   className={`${styles['variantBox']} ${sizes === item ? styles['selected'] : ''}`}
                  onClick={() => handleSizes(item)}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className={`d-flex ${styles['addToCartMainCont']}`}>
          <div className={`d-flex ${styles['counterCont']}`}>
            <Button onClick={() => count > 1 && handleCount(-1)}><FaMinus /></Button>
            <span>{count}</span>
            <Button onClick={() => handleCount(+1)}><FaPlus /></Button>
          </div>
          <div className={`d-flex ${styles['addCartSubCont']}`}>
            <Button onClick={() => handleCart(product?._id)}><MdAddShoppingCart /> Add To Cart</Button>
          </div>
        </div>

        <div className={`${styles['buyBtnCont']}`}>
          <Link to={'/checkout'}>
            <Button onClick={handleBuyItem}><FaShoppingCart /> Buy</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
