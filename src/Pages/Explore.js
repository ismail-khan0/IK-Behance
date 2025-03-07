import React, { useState } from "react";
import ExploreSidebar from "../Components/ExploreSidebar";
import ExploreSearchBar from "../Components/ExploreSearchBar";
import ProjectCard from "../Components/ProjectCard";
import AssetCard from "../Components/AssetCard";

const Explore = () => {
  const [selected, setSelected] = useState("Projects");

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

  const renderContent = () => {
    const selectedData = dataMap[selected] || []; // Default to empty array if no match
    return selectedData.map((card, index) =>
      selected === "People" ? (
        <AssetCard key={index} {...card} /> // Replace with a `PeopleCard` if needed
      ) : (
        <ProjectCard key={index} {...card} />
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 mt-16">
      {/* Sidebar */}
      <ExploreSidebar selected={selected} setSelected={setSelected} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <ExploreSearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Explore;
