import React, { useState } from "react";
import SignIn from "../Components/SignUp";
import SignUp from "../Components/SignIn";
import backgroundImage from '../images/bg-image.webp'
const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between forms

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
        {isSignIn ? (
          <SignIn toggle={() => setIsSignIn(false)} />
        ) : (
          <SignUp toggle={() => setIsSignIn(true)} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
