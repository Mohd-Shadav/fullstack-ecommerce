import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Logo from "/images/Logo.png";
import { FaRupeeSign } from "react-icons/fa";

import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosMenu } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";

import { Button, Avatar } from "@mui/material";
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
  const location = useLocation();

  const dispatch = useDispatch();

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const handleMouseEnter = (item) => {
    setIsDropDown(item);
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
  }, []);

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
          {myCont.isLoggedIn ? (
            <Link to={"/signin"} className={styles["userDiv"]}>
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
              1800.00
            </span>
          </Link>
          <Link to={"/cart"}>
            <span className={styles["addtoCart"]}>
              <HiOutlineShoppingBag />
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

        {categoryObj.slice(0,6).map((item, index) => {
          return (
            <div key={index} className={styles["categoryDivMainCont"]}>
              <div
                className={styles["categoryDivs"]}
                onMouseEnter={() => handleMouseEnter(item.categoryname)}
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

              {item.categoryname.toLowerCase() === "electronics" ? (
                <div
                  style={{
                    visibility: isDropDown === item.name ? "visible" : "hidden",
                  }}
                  className={`${styles["sub-menu"]} ${
                    styles[item.categoryname]
                  } shadow`}
                >
                  <Link>
                    <Button
                      style={{
                        width: "100%",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      Laptops
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      style={{
                        width: "100%",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      Smart Watches
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      style={{
                        width: "100%",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      Cameras
                    </Button>
                  </Link>
                </div>
              ) : ["groceries", "beauty", "wellness"].includes(
                  item.categoryname.toLowerCase()
                ) ? (
                <></>
              ) : (
                <div
                  style={{
                    visibility:
                      isDropDown === item.categoryname ? "visible" : "hidden",
                  }}
                  className={`${styles["sub-menu"]} ${
                    styles[item.categoryname]
                  } shadow`}
                >
                  <Link>
                    <Button
                      style={{
                        width: "100%",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      Men
                    </Button>
                  </Link>
                  <Link>
                    <Button
                      style={{
                        width: "100%",
                        textAlign: "start",
                        display: "flex",
                        justifyContent: "flex-start",
                      }}
                    >
                      Women
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
