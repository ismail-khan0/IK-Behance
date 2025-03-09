import React, { useState } from "react";
import ExploreSidebar from "../Components/ExploreSidebar";
import ExploreSearchBar from "../Components/ExploreSearchBar";
import ProjectCard from "../Components/ProjectCard";
import AssetCard from "../Components/AssetCard";
import Button from "../Components/Button";

const Explore = () => {
  const [selected, setSelected] = useState("Projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const projectData = [
    { title: "The Rings of Power", description: "Opening title sequence", imgSrc: "/placeholder.jpg" },
    { title: "LOGOFOLIO - V.02", description: "2023 Collection", imgSrc: "/placeholder.jpg" },
    { title: "CASA PILARA PLURAL ARQ", description: "Mariano Imperial", imgSrc: "/placeholder.jpg" },
  ];

  const assetData = [
    { title: "3D Model - Chair", description: "High-poly chair model", imgSrc: "/placeholder.jpg" },
    { title: "UI Kit", description: "A modern UI kit for designers", imgSrc: "/placeholder.jpg" },
    { title: "Texture Pack", description: "High-resolution textures for 3D projects", imgSrc: "/placeholder.jpg" },
  ];

  const imageData = [
    { title: "Sunset View", description: "A beautiful sunset landscape", imgSrc: "/placeholder.jpg" },
    { title: "Modern Art", description: "A digital painting", imgSrc: "/placeholder.jpg" },
  ];

  const peopleData = [
    { title: "John Doe", description: "Creative Designer", imgSrc: "/placeholder.jpg" },
    { title: "Jane Smith", description: "UX Researcher", imgSrc: "/placeholder.jpg" },
  ];

  // Mapping selected category to data
  const dataMap = {
    Projects: projectData,
    Assets: assetData,
    Images: imageData,
    People: peopleData,
  };

  // Function to filter content based on search query
  const filteredData = dataMap[selected].filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderContent = () =>
    filteredData.map((card, index) =>
      selected === "People" ? <AssetCard key={index} {...card} /> : <ProjectCard key={index} {...card} />
    );

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-100 mt-16">
      {/* Sidebar Toggle Button (Only for Small Screens) */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Explore</h2>
        <Button btnText="Filter" onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-4 bg-blue-500 text-white rounded-full" />
      </div>

      {/* Sidebar (Visible on lg, Toggle on sm & md) */}
      <div className={`lg:flex ${isSidebarOpen ? "block" : "hidden"} w-full lg:w-80 p-4 bg-white border-r shadow-sm`}>
        <ExploreSidebar selected={selected} setSelected={setSelected} />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <ExploreSearchBar onSearch={setSearchQuery} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Explore;
