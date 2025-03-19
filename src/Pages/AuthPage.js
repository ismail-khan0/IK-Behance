import React from "react";
import { useLocation } from "react-router-dom";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
// Import AuthProvider
import backgroundImage from '../images/authBG.avif';
import { AuthProvider } from "../Context/AuthProvider";

const AuthPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isSignIn = queryParams.get("form") !== "signup"; // Default to SignIn

  return (
    <AuthProvider> {/* Wrap AuthPage inside AuthProvider */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="Background" className="w-full h-full object-cover" />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        {/* Auth Container */}
        <div className="relative bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          {isSignIn ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </AuthProvider>
  );
};

export default AuthPage;
