import React from "react";
import { useLocation } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import backgroundImage from '../images/authBG.avif';

const AuthPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSignIn = queryParams.get("form") !== "signup"; // Default to SignIn

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Auth Container */}
      <div className="relative bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default AuthPage;
