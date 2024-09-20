import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getAccessToken } from "../utils/setAuthToken";
import MiniDrawer from "../components/SideBar";

// Defining the PrivateRoutes functional component
export default function PrivateRoutes({ children, title }) {
  const [currentIndex, setCurrentIndex] = useState(0); // State to manage the current index

  // Effect to toggle the fixed-navbar class on the body
  useEffect(() => {
    document.body.classList.toggle("fixed-navbar");
  }, []); // Empty dependency array means this runs once on mount

  const navigate = useNavigate(); // Initializing navigate function for routing

  let token = getAccessToken(); // Retrieving the access token
  console.log(token); // Logging the token for debugging purposes

  // Effect to check if the token exists and navigate if it doesn't
  useEffect(() => {
    if (!token) {
      // If no token is found
      console.log("navigate to login"); // Log the navigation action
      navigate("/login", { replace: true }); // Redirect to login page
    }
  }, [token]); // Dependency on token, runs when token changes

  return (
    <>
      <MiniDrawer curentIndex={currentIndex} setIndex={setCurrentIndex} />
      {/* Rendering MiniDrawer with current index */}
      <Navbar /> {/* Rendering Navbar component */}
      <div className="container-fluid app-content content dashboard w-100 h-100 my-5 py-3 mx-5 my-lg-5 py-lg-5 mx-lg-5 px-lg-5">
        {/* Main content container */}
        <div className="content-wrapper w-100 h-100">
          {/* Wrapper for content */}
          <div className="content-body w-100 h-100">{children}</div>
          {/* Rendering children components */}
        </div>
      </div>
    </>
  );
}

// Defining prop types for the component (currently empty)
PrivateRoutes.propTypes = {};
