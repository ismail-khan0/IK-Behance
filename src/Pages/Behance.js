import React from "react";
import UpgradeToPro from "../Components/UpgradeToPro";
import Button from "../Components/Button";
import ExpandReach from "../Components/Expandreach";
import SuccessStories from "../Components/SuccessStories";
import bg2 from '../images/behancBg.jpeg';
import PricingPage from "../Components/PricingPage";
import Footer from "../Components/Footer";

const Behance = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Accelerate Your Creative Career with Behance Pro
        </h1>
        <p className="text-lg md:text-xl text-center max-w-2xl mb-6">
          Take your career further with tools designed to showcase your creativity, reach more people, and earn more—all in one place.
        </p>
        {/* Adjust button layout for sm and md screens */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
          <Button 
            btnText="Start Free Trial" 
            className="bg-white text-black px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-200 w-full sm:w-auto" 
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 w-full sm:w-auto mt-4 sm:mt-0">
            Compare Plans
          </button>
        </div>
      </div>

      <UpgradeToPro />
      <ExpandReach />
      <SuccessStories />
      <PricingPage />
      <Footer />
    </>
  );
};

export default Behance;
