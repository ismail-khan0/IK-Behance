import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import graphic from '../images/freelance/graphic.jpeg'
import Logo from '../images/freelance/logo.jpg'
import branding from '../images/freelance/branding.png'
import webdesign from '../images/freelance/webdesign.jpeg'
import social from '../images/freelance/social.jpeg'
import illustration from '../images/freelance/illustration.png'
import architicture from '../images/freelance/architicture.jpeg'
import UIUX from '../images/freelance/UIUX.jpeg'
const tabs = [
  { name: "Fresco", image: illustration },
  { name: "Best of Behance", image: architicture },
  { name: "Graphic Design", image: graphic },
  { name: "Photography", image: architicture },
  { name: "UI/UX", image: UIUX },
  { name: "Illustration", image: illustration},
  { name: "Logo Designers", image: Logo },
  { name: "Brand Designers", image: branding },
  { name: "Website Designers", image: webdesign},
  { name: "Illustrators", image: illustration },
  { name: "Social Media Designers", image: social },
];

const Navbar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    navigate(`/exploretools?tab=${encodeURIComponent(tabName)}`);
  };

  return (
    <div className="overflow-x-auto whitespace-nowrap flex items-center space-x-2 bg-gray-100 p-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => handleTabClick(tab.name)}
          className={`relative flex items-center justify-center w-full p-6 h-16  rounded-lg text-white font-bold shadow-md transition-all ${
            activeTab === tab.name ? "bg-blue-600" : "bg-gray-500"
          }`}
          style={{
            backgroundImage: `url(${tab.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
          <span className="relative z-10">{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

const ExploreTools = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "Fresco";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = queryParams.get("tab");
    setActiveTab(tab || "Fresco"); // Ensure it always has a valid tab
  }, [location.search]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-20">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-6">
        <h1 className="text-4xl font-bold">{activeTab}</h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore creative tools and categories that suit your needs.
        </p>
      </div>
    </div>
  );
};

export default ExploreTools;
