import React, { useState } from "react";
import { FiClipboard, FiSearch, FiInfo, FiPlus } from "react-icons/fi";
import DesignCategories from "../Components/DesignCategories";
import HireSection from "../Components/HireSection";
import Footer from "../Components/Footer";
import HiringonBehance from "../Components/HiringonBehance";
import FreelanceProject from "../Components/FreelanceProject";
import AuthPage from "./AuthPage";
import Jobs from "./Jobs";
import HeroSection from "../Components/HeroSection";

const HireFreelancer = () => {
  // State to track selected component (Initially, nothing is selected)
  const [activeComponent, setActiveComponent] = useState("hiringBehance");

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-16 bg-white text-black">
        {/* Navbar */}
        <nav className="w-full flex justify-center py-4 items-center px-6 border-b">
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            {/* My Freelance Projects */}
            <button
              onClick={() => setActiveComponent("freelanceProjects")}
              className={`flex items-center space-x-2 flex flex-col lg:flex-row ${
                activeComponent === "freelanceProjects" ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              <FiClipboard size={18} />
              <span className=" lg:inline">My Freelance Projects</span>
            </button>

            {/* Find Creatives */}
            <button
              onClick={() => setActiveComponent("findCreatives")}
              className={`flex items-center space-x-2 flex flex-col lg:flex-row ${
                activeComponent === "findCreatives" ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              <FiSearch size={18} />
              <span className=" lg:inline">Find Creatives</span>
            </button>

            {/* Hiring on Behance */}
            <button
              onClick={() => setActiveComponent("hiringBehance")}
              className={`flex items-center space-x-2 flex flex-col lg:flex-row ${
                activeComponent === "hiringBehance" ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              <FiInfo size={18} />
              <span className=" lg:inline">Hiring on Behance</span>
            </button>

            {/* Divider */}
            <div className="border-l border-gray-300 h-5 hidden lg:block"></div>

            {/* New Freelance Project */}
            <button
              onClick={() => setActiveComponent("newProject")}
              className={`flex items-center space-x-2 flex flex-col lg:flex-row ${
                activeComponent === "newProject" ? "text-blue-500" : "hover:text-blue-500"
              }`}
            >
              <FiPlus size={18} />
              <span className="lg:inline">New Freelance Project</span>
            </button>
          </div>
        </nav>

        {/* Content */}
      </div>

      {/* Render the selected component */}
      {activeComponent === "freelanceProjects" && <FreelanceProject />}
      {activeComponent === "findCreatives" && <Jobs />}
      {activeComponent === "hiringBehance" && (
        <>
          <HeroSection />
          <DesignCategories />
          <HireSection />
          <HiringonBehance />
          <Footer />
        </>
      )}
      {activeComponent === "newProject" && <AuthPage />}
    </>
  );
};

export default HireFreelancer;