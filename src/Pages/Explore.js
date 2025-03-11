import React, { useState } from "react";
import ExploreSidebar from "../Components/ExploreSidebar";
import ExploreSearchBar from "../Components/ExploreSearchBar";
import ProjectCard from "../Components/ProjectCard";
import AssetCard from "../Components/AssetCard";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import SocialAuthButtons from "../Components/SocialAuthButtons";
import RingofPower from '../images/ringpower.jpg';
import Logo from '../images/logo.jpg';
import Casa from '../images/Casa.jpeg';
import TChair from '../images/3DChair.jpg';
import Ui_Kit from '../images/Ui_Kit.avif';
import sunsit from '../images/sunsit.jpeg';
import Modernart from '../images/Modernart.jpeg';
import ik from '../images/ik-img.jpeg';
import Ui_research from '../images/Ui_research.jpeg';

const Explore = () => {
  const [selected, setSelected] = useState("Projects");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // New state for dropdown selection

  const projectData = [
    { title: "The Rings of Power", description: "Opening title sequence", imgSrc: RingofPower, Recommended: "Recommended" },
    { title: "LOGOFOLIO - V.02", description: "2023 Collection", imgSrc: Logo, Recommended: "Curated" },
    { title: "Modern UI Design", description: "Sleek and intuitive UI concepts", imgSrc: RingofPower, Recommended: "Curated" },
    { title: "Brand Identity Kit", description: "Logos and branding essentials", imgSrc: Ui_Kit, Recommended: "Most Viewed" },
    { title: "Luxury Home Design", description: "Elegant architectural concepts", imgSrc: sunsit, Recommended: "Most Viewed" },
    { title: "Cinematic Title Design", description: "High-end motion graphics", imgSrc: Modernart, Recommended: "Most Discussed" },
    { title: "Creative Portfolio", description: "Showcasing best design work", imgSrc: TChair, Recommended: "Most Discussed" },
    { title: "Minimalist Interiors", description: "Stylish and modern spaces", imgSrc: Casa, Recommended: "Most Discussed" },
    { title: "Digital Art Showcase", description: "A collection of vibrant digital paintings", imgSrc: ik, Recommended: "Most Recent" },
    { title: "Typography Mastery", description: "Exploring creative typography", imgSrc: Logo, Recommended: "Most Recent" },
    { title: "Urban Architecture", description: "Innovative cityscapes and structures", imgSrc: Casa, Recommended: "Most Recent" },
  ];

  const assetData = [
    { title: "3D Model - Chair", description: "High-poly chair model", imgSrc: TChair ,Recommended: "Most Viewed"},
    { title: "UI Kit", description: "A modern UI kit for designers", imgSrc: Ui_Kit ,Recommended: "Recommended"},
    { title: "Texture Pack", description: "High-resolution textures for 3D projects", imgSrc: sunsit ,Recommended: "Curated"},
    { title: "Modern UI Design", description: "Sleek and intuitive UI concepts", imgSrc: RingofPower, Recommended: "Curated" },
    { title: "Brand Identity Kit", description: "Logos and branding essentials", imgSrc: Ui_Kit, Recommended: "Most Viewed" },
    { title: "Luxury Home Design", description: "Elegant architectural concepts", imgSrc: sunsit, Recommended: "Most Viewed" },
    { title: "Cinematic Title Design", description: "High-end motion graphics", imgSrc: Modernart, Recommended: "Most Discussed" },
    { title: "Creative Portfolio", description: "Showcasing best design work", imgSrc: TChair, Recommended: "Most Discussed" },
    { title: "Minimalist Interiors", description: "Stylish and modern spaces", imgSrc: Casa, Recommended: "Most Discussed" },
    { title: "Digital Art Showcase", description: "A collection of vibrant digital paintings", imgSrc: ik, Recommended: "Most Recent" }
  ];

  const imageData = [
    { title: "Sunset View", description: "A beautiful sunset landscape", imgSrc: sunsit ,Recommended: "Recommended"},
    { title: "Modern Art", description: "A digital painting", imgSrc: Modernart,Recommended: "Curated" },
    { title: "Modern UI Design", description: "Sleek and intuitive UI concepts", imgSrc: RingofPower, Recommended: "Curated" },
    { title: "Brand Identity Kit", description: "Logos and branding essentials", imgSrc: Ui_Kit, Recommended: "Most Viewed" },
    { title: "Luxury Home Design", description: "Elegant architectural concepts", imgSrc: sunsit, Recommended: "Most Viewed" },
    { title: "Cinematic Title Design", description: "High-end motion graphics", imgSrc: Modernart, Recommended: "Most Discussed" },
    { title: "Creative Portfolio", description: "Showcasing best design work", imgSrc: TChair, Recommended: "Most Discussed" },
    { title: "Minimalist Interiors", description: "Stylish and modern spaces", imgSrc: Casa, Recommended: "Most Discussed" },
    { title: "Digital Art Showcase", description: "A collection of vibrant digital paintings", imgSrc: ik, Recommended: "Most Recent" }
  ];

  const peopleData = [
    { title: "Ismail khan", description: "Creative Designer", imgSrc: ik ,Recommended: "Recommended"},
    { title: "Jane Smith", description: "UX Researcher", imgSrc: Ui_research,Recommended: "Curated" },
    { title: "Modern UI Design", description: "Sleek and intuitive UI concepts", imgSrc: RingofPower, Recommended: "Curated" },
    { title: "Brand Identity Kit", description: "Logos and branding essentials", imgSrc: Ui_Kit, Recommended: "Most Viewed" },
    { title: "Luxury Home Design", description: "Elegant architectural concepts", imgSrc: sunsit, Recommended: "Most Viewed" },
    { title: "Cinematic Title Design", description: "High-end motion graphics", imgSrc: Modernart, Recommended: "Most Discussed" },
    { title: "Creative Portfolio", description: "Showcasing best design work", imgSrc: TChair, Recommended: "Most Discussed" },
    { title: "Minimalist Interiors", description: "Stylish and modern spaces", imgSrc: Casa, Recommended: "Most Discussed" },
    { title: "Digital Art Showcase", description: "A collection of vibrant digital paintings", imgSrc: ik, Recommended: "Most Recent" }
  ];

  const dataMap = {
    Projects: projectData,
    Assets: assetData,
    Images: imageData,
    People: peopleData,
  };

  const filteredData = dataMap[selected].filter(
    (item) =>
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory && selectedCategory !== "Recommended" ? item.Recommended === selectedCategory : true) // Show all if "Recommended" is selected
  );
  

  const renderContent = () =>
    filteredData.map((card, index) =>
      selected === "People" ? <AssetCard key={index} {...card} /> : <ProjectCard key={index} {...card} />
    );

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100 mt-16">
        <div className="lg:hidden p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Explore</h2>
          <Button
            btnText="Filter"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-4 bg-blue-500 text-white rounded-full"
          />
        </div>

        <div className="flex flex-1">
          <div className={`lg:flex ${isSidebarOpen ? "block" : "hidden"} w-full lg:w-80 p-4 bg-white border-r shadow-sm`}>
            <ExploreSidebar selected={selected} setSelected={setSelected} />
          </div>

          <div className="flex-1 p-6 bg-gray-100">
            <ExploreSearchBar onSearch={setSearchQuery} onSelectCategory={setSelectedCategory} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">{renderContent()}</div>
          </div>
        </div>
      </div>
      <SocialAuthButtons />
      <Footer />
    </>
  );
};

export default Explore;
