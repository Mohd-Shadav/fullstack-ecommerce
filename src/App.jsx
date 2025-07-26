import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Home from "./components/Home/LandingPageDocs/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Home/Header";
import { CountryDropDownContext, MyContext } from "./store/Context";
import axios from "axios";
import { useEffect, useState } from "react";
import Listing from "./components/Listing/Listing";
import FooterComponent from "./components/Footer/FooterComponent";
import "./App.css";
import { FaAngleUp } from "react-icons/fa";
import ProductDetails from "./components/Home/ProductDetails/ProductDetails";
import CartComponent from "./components/Home/AddToCart/CartComponent";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { login, userAllData } from "./store/reduxSlice";
import MyProfile from "./components/client/MyProfile";
import Stepper from "./components/Checkout/Stepper";

function App() {
  const URL = "https://countriesnow.space/api/v0.1/countries";

  const [countryList, setCountryList] = useState([]);
  const loggedIn = useSelector((state)=>state.isLoggedIn.value)

  const [isHeaderFooter,setIsHeaderFooter] = useState(true);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  const getCountries = async () => {
    try {
      const response = await axios.get(URL);

      setCountryList(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const [scroller, setScroller] = useState(false);

  const handleTopButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };





  useEffect(() => {
    async function fetchUserFromCookie() {
    
        const res = await axios.get('http://localhost:3000/api/users/auth', {
          withCredentials: true
        });

     

     
         if(res.status===200)
         {
        dispatch(login());
        localStorage.setItem("userID",res.data._id);
        dispatch(userAllData(res.data))
         }
         else{
        localStorage.setItem("userID","");
        dispatch(userAllData({}))
         }
      
    }

    fetchUserFromCookie();
  }, [loggedIn]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScroller(true);
      } else {
        setScroller(false);
      }
    };




    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window]);

  return (
    <BrowserRouter>
      <CountryDropDownContext.Provider value={{ countryList}}>

     <MyContext value={{setIsHeaderFooter,setIsLoggedIn,isLoggedIn}}>

        {
          isHeaderFooter && <Header />
        }
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Listing"} element={<Listing />} />
          <Route path={"/productdetails/:productId"} element={<ProductDetails />} />
          <Route path={"/cart"} element={<CartComponent />} />
          <Route path={"/signin"} element={<SignIn />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/myprofile"} element = {<MyProfile/>}/>
          <Route path={"/checkout"} element={<Stepper/>}/>
        </Routes>
     {
      isHeaderFooter && (<>
        <FooterComponent />
        {scroller && (
          <div className={`totheTopButton`}>
            <button onClick={handleTopButton}>
              <FaAngleUp />
            </button>
          </div>
        )}
        </>
      )
     }

</MyContext>
      </CountryDropDownContext.Provider>
    </BrowserRouter>
  );
}

export default App;
