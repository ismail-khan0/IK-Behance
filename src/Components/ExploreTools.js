import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const tabs = [
  { name: "Fresco" },
  { name: "Best of Behance" },
  { name: "Graphic Design" },
  { name: "Photography" },
  { name: "UI/UX" },
  { name: "Illustration" },
];

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap flex items-center space-x-4 bg-gray-100 p-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => setActiveTab(tab.name)}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
            activeTab === tab.name
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

const ExploreTools = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get("tab") || "Fresco";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = queryParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
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