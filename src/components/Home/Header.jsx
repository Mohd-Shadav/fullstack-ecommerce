import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "/images/Logo.png";
import { FaRupeeSign } from "react-icons/fa";

import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { deepPurple } from '@mui/material/colors';

import { Button, Avatar, Badge } from "@mui/material";
import CountryDropDown from "./CountryDropDown";
import { CountryDropDownContext, MyContext } from "../../store/Context";
import axios from "axios";
import { getCategorySlice, getFilterData, getFilterDataUpdationTrigger } from "../../store/reduxSlice";


function Header() {
  const context = useContext(CountryDropDownContext);
  const myCont = useContext(MyContext);
  const [isDropDown, setIsDropDown] = useState("");
  const [isSliderAllCategory, setIsSliderAllCategory] = useState("");
  const [allCategoryDropper, setAllCategoryDropper] = useState(false);
  const [categoryObj, setCategoryObj] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const subNavRef = useRef(null);
  const [subCategories,setSubCategories] = useState([]);
  const loggedIn = useSelector((state)=>state.isLoggedIn.value)
  const userData = useSelector((state)=>state.userData.value)
  const updationUser = useSelector((state)=>state.userData.isUpdate);
  const filterSubcategory = useSelector((state)=>state.filterDataSlice.value);
  const [searchProduct,setSearchProduct] = useState(null)
  const [searchData,setSearchedData] = useState([]);
 
 
  const [filterData,setFilterData] = useState({
    subcategory:filterSubcategory.subcategory,
    pricerange:[100,60000],
    rating:3.5
  })

  const [cartItems,setCartItems] = useState(0);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleMouseEnter =async (item) => {
    setIsDropDown(item);
    try{
     

      let getCategory = await axios.get(`http://localhost:3000/api/category/category-name/${item}`);

      let res = await axios.get(`http://localhost:3000/api/category/${getCategory.data._id}/sub-category`);

      setSubCategories(res.data)

     


    }catch(err)
    {
      alert("Failed to load subcategories")
    }
  };

  const handleMouseLeave = () => {
    setIsDropDown("");
    setIsSliderAllCategory("");
  };

  const handleAllCategoriesDropDown = () => {
    setAllCategoryDropper(!allCategoryDropper);
  };

const handleSliderCategories = async (categoryName) => {
  try {
    setIsSliderAllCategory(categoryName);
    let getCategory = await axios.get(`http://localhost:3000/api/category/category-name/${categoryName}`);
    let res = await axios.get(`http://localhost:3000/api/category/${getCategory.data._id}/sub-category`);
    setSubCategories(res.data);
  } catch (err) {
    alert("Failed to load subcategories");
  }
};

  const handleSettingCategory = (name) => {
    dispatch(getCategorySlice(name));
      setFilterData((prev)=>({
      ...prev,subcategory:""
    }))
  };

  const handleSubCategory =(item,elem)=>{


    setFilterData((prev)=>({
      ...prev,subcategory:elem
    }))



    dispatch(getCategorySlice(item))
 
    
    navigate('/Listing');

 


    

  }

  const callProducts =async (e)=>{
    console.log(e.target.value)
    setSearchProduct(e.target.value)
    
    const productname = e.target.value;

    if(productname)
    {
 try{
      let res = await axios.get(`http://localhost:3000/api/products/get-product-by-name/${productname}`);

      console.log(res.data);

      setSearchedData(res.data)

    }catch(err)
    {
      alert("error to finding")
    }

    }else{
      setSearchProduct(null)
      setSearchedData([])
    }
   
  }


  function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

  const handleClickSearchedData = async(id)=>{


     navigate(`/productdetails/${id}`);
     setSearchedData([])

  }


  useEffect(()=>{
    dispatch(getFilterData(filterData));
    dispatch(getFilterDataUpdationTrigger());




    
        

  },[filterData])


  useEffect(()=>{


     const getUsers = async () => {

      if(userData._id)
      {
        let res = await axios.get(
          `http://localhost:3000/api/users/get-user/${userData._id}`
        );
  
        setCartItems(res.data.cart);
  
  
 

      }
      else{
        
        setCartItems(0)
      }
  
      

      
      
   
  };

  getUsers()

    
  
      
  },[updationUser,loggedIn])
  useEffect(() => {
    const getCategories = async (req, res) => {
      try {
        let res = await axios.get(
          "http://localhost:3000/api/category/get-categories"
        );

        setCategoryObj(res.data);
      } catch (err) {
        alert("Categories were not fetched...");
      }
    };

  
    getCategories();

   

  
  }, [loggedIn]);

  return (
    <div className={styles["header"]}>
      <nav
        className="d-flex align-items-center justify-content-between pt-3 container"
        style={{ width: "100%" }}
      >
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="" style={{ width: "100px" }} />
        </Link>

        <div className={styles['main-div-searched-and-data']}>
         
          <div className={`${styles["searchBar"]} d-flex`}>
            <input
              type="text"
              name="search"
              value={searchProduct}
              className={styles["searchInput"]}
              placeholder="Search for products..."
              onChange={callProducts}
            />
            <span className={styles["searchIcon"]}>
              <FaSearch />
            </span>
          </div>
        {searchData.length>0 && (
            <div className={styles["searched-data-div"]}>

            {searchData.map((item)=>{
              return (
                <div className={styles['data-div']} onClick={()=>handleClickSearchedData(item._id)}>
                    <img src={item.images.thumbnail} alt="" />
                    <h6>{item.name}</h6>
                </div>
              )
            })}

          </div>
        )}
        </div>
        <div className={styles["userCredentialCont"]}>
          {loggedIn ? (
            <Link to={"/myprofile"} className={styles["userDiv"]}>
              <Avatar
                sx={{ bgcolor: deepPurple[500] }}
                className={styles["avatar"]}
              >{userData?.name?.slice(0,1).toUpperCase()}</Avatar>
            </Link>
          ) : (
            <Link to={"/signin"}>
              <Button className={`${styles["signin-btn"]}`}>Sign In</Button>
            </Link>
          )}

          <Link to={"/"} className={styles["wallet"]}>
            <span>
              <FaRupeeSign />
              {userData.wallet > 0 ? userData.wallet : "00.00"}
            </span>
          </Link>
          <Link to={loggedIn?"/cart":"/signin"}>
            <span className={styles["addtoCart"]}>
              <Badge badgeContent={cartItems?.length} showZero color="primary" >
              <HiOutlineShoppingBag />
              </Badge>

            </span>
          </Link>
        </div>
      </nav>

      <div
        ref={subNavRef}
        onMouseLeave={handleMouseLeave}
        className={` ${styles["categoriesCont"]} ${
          isSticky ? styles["sticky"] : ""
        }`}
      >
        <div
          className={`d-flex flex-column ${styles["allCategoriesMainCont"]}`}
        >
          <div
            className={styles["allCategories"]}
            onClick={handleAllCategoriesDropDown}
          >
            <span>
              <IoIosMenu />
            </span>
            <span>All Categories</span>
            <span>
              <RiArrowDropDownLine />
            </span>
          </div>

          

        {/* Vertical dropper */}
<div
  className={`${styles["allcategory-dropper"]} ${
    allCategoryDropper ? styles["activeDropperAll"] : ""
  }`}
  onMouseLeave={handleMouseLeave}
>
  <ul>
    {categoryObj.map((item, idx) => (
      <li
        key={idx}
        onMouseEnter={() => handleSliderCategories(item.categoryname)}
     
      >
        <Link
          to={"/Listing"}
          onClick={() => handleSettingCategory(item.categoryname)}
        >
          <Button>
            <span>
              <img src={item.categoryicon} alt="" />
            </span>
            {item.categoryname}
          </Button>
        </Link>
      </li>
    ))}
  </ul>

  {/* ✅ Dynamic subcategory slider — replaces hardcoded logic */}
  {isSliderAllCategory && (
    <div
      className={`${styles["slider-category-cont"]} ${styles["slider-active"]}`}
      style={{
        visibility: isSliderAllCategory ? "visible" : "hidden",
        opacity: isSliderAllCategory ? 1 : 0,
        transform: isSliderAllCategory ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      <ul>
        {subCategories.map((elem, idx) => (
          <li key={idx}>
            <Link
              to={"/Listing"}
              onClick={() =>
                handleSubCategory(isSliderAllCategory, elem)
              }
            >
              <Button
                style={{
                  width: "100%",
                  textAlign: "start",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {elem}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
        </div>



        {/* Horizontal Categories..... */}

        {categoryObj.slice(0, 6).map((item, index) => {
          return (
            <div key={index} className={styles["categoryDivMainCont"]} 
   onMouseEnter={() => handleMouseEnter(item.categoryname)}
  onMouseLeave={handleMouseLeave}>
              <div
                className={styles["categoryDivs"]}
               
              >
                <span>
                  <img
                    src={item.categoryicon}
                    alt={`${item.categoryname} Logo`}
                  />
                </span>
                <Link
                  to={"/Listing"}
                   onClick={() => handleSettingCategory(item.categoryname)}
              
                >
                  {item.categoryname.toUpperCase()} 
                </Link>
              </div>

             
                <div
                 style={{
  visibility: isDropDown === item.categoryname ? "visible" : "hidden",
  opacity: isDropDown === item.categoryname ? 1 : 0,
  transform: isDropDown === item.categoryname ? "translateY(0)" : "translateY(20px)",
  transition: "opacity 0.3s, transform 0.3s",
}}
                  className={`${styles["sub-menu"]} ${
                    styles[item.categoryname]
                  } shadow`}
                >

                  {subCategories.map((elem)=> {
                    return (  <Link to={'/Listing'} onClick={()=>handleSubCategory(item.categoryname,elem)}>
                    <Button
                      style={{
                        width: "100%",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                    {elem}
                    </Button>
                  </Link>

                    )
                  })}
               
                </div>
           
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
