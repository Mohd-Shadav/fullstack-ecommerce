import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "/images/Logo.png";
import { FaRupeeSign } from "react-icons/fa";

import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Button, Avatar, Badge } from "@mui/material";
import CountryDropDown from "./CountryDropDown";
import { CountryDropDownContext, MyContext } from "../../store/Context";
import axios from "axios";
import { getCategorySlice } from "../../store/reduxSlice";


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
  const [cartItems,setCartItems] = useState(userData?.cart?.length);


  const dispatch = useDispatch();

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

      console.log(res.data)


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

  const handleSliderCategories = (item) => {
    setIsSliderAllCategory((prev) => (prev === item ? "" : item));
  };

  const handleSettingCategory = (name) => {
    dispatch(getCategorySlice(name));
  };


  useEffect(()=>{


     const getUsers = async () => {
    try {
      let res = await axios.get(
        `http://localhost:3000/api/users/get-user/${userData._id}`
      );

      setCartItems(res.data.cart);
      
    } catch (err) {
      alert("user not fetched...");
    }
  };

  getUsers()

    
  
      
  },[updationUser])
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

        <div className="country&Search-Cont d-flex gap-3">
          {context.countryList.length > 0 && <CountryDropDown />}

          <div className={`${styles["searchBar"]} d-flex`}>
            <input
              type="text"
              name=""
              id=""
              className={styles["searchInput"]}
              placeholder="Search for products..."
            />
            <span className={styles["searchIcon"]}>
              <FaSearch />
            </span>
          </div>
        </div>
        <div className={styles["userCredentialCont"]}>
          {loggedIn ? (
            <Link to={"/myprofile"} className={styles["userDiv"]}>
              <Avatar
                alt="Remy Sharp"
                src="https://thumbs.dreamstime.com/b/customer-support-service-agent-headset-flat-vector-icon-design-designs-153069456.jpg"
                className={styles["avatar"]}
              />
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
          <Link to={"/cart"}>
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

          <div
            className={`${styles["allcategory-dropper"]} ${
              allCategoryDropper ? styles["activeDropperAll"] : ""
            }`}
            onMouseLeave={handleMouseLeave}
          >
            <ul>
              {categoryObj.map((item) => {
                return (
                  <li
                    onMouseEnter={() =>
                      handleSliderCategories(item.categoryname)
                    }
                  >
                    <Link
                      to={"/Listing"}
                      onClick={() => handleSettingCategory(item.categoryname)}
                    >
                      <Button>
                        <span>
                          <img src={item.categoryicon} alt="" />
                        </span>{" "}
                        {item.categoryname}
                      </Button>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {isSliderAllCategory.includes("Electronics") ? (
              <div
                className={`${styles["slider-category-cont"]} ${
                  isSliderAllCategory === "Electronics"
                    ? styles["slider-active"]
                    : ""
                } `}
                style={{
                  visibility: isSliderAllCategory ? "visible" : "hidden",
                }}
              >
                <ul>
                  <li>
                    <Link>
                      <Button>Laptops</Button>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <Button>Smart Watches</Button>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <Button>Cameras</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            ) : [
                "Groceries",
                "Beauty",
                "Wellness",
                "Sports",
                "Jewellery",
              ].includes(isSliderAllCategory) ? (
              <></>
            ) : (
              <div
                className={`${styles["slider-category-cont"]} ${
                  isSliderAllCategory === "Fashion" ||
                  isSliderAllCategory === "Bags" ||
                  isSliderAllCategory === "Footwear"
                    ? styles["slider-active"]
                    : ""
                } `}
                style={{
                  visibility: isSliderAllCategory ? "visible" : "hidden",
                }}
              >
                <ul>
                  <li>
                    <Link>
                      <Button>Men</Button>
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <Button>Women</Button>
                    </Link>
                  </li>
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
                    return (  <Link to={'/Listing'}>
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
