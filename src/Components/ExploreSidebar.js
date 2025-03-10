import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  SlidersHorizontal,
  ArrowLeft,
  Search,
  MapPin,
  Wrench,
} from "lucide-react";
import Button from "./Button";

const ExploreSidebar = ({ selected, setSelected }) => {
  const categories = ["Projects", "Assets", "Images", "People"];
  const [expanded, setExpanded] = useState({});
  const [availability, setAvailability] = useState("All");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [searchTool, setSearchTool] = useState("");

  const popularTools = [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe InDesign",
    "Adobe After Effects",
    "Adobe Photoshop Lightroom",
  ];

  const toggleExpand = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-80 p-4 bg-white border-r shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <SlidersHorizontal size={18} />
          <span>Filter</span>
        </div>
        <ArrowLeft size={18} className="cursor-pointer" />
      </div>

      {/* Filter Categories */}
      <div className="flex flex-col space-y-2">
        {categories.map((item) => (
          <Button
            key={item}
            onClick={() => setSelected(item)}
            btnText={item}
            className={`transition duration-200 
              ${
                selected === item
                  ? "bg-blue-500 text-white font-semibold"
                  : "bg-gray-100 text-gray-700"
              }
            `}
          />
        ))}
      </div>

      {/* Expandable Filters */}
      <div className="mt-4 space-y-2">
        {/* Availability Filter */}
        <div className="border-b">
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => toggleExpand("Availability")}
          >
            <div className="flex items-center gap-2">
              <Search size={18} />
              <span className="font-medium">Availability</span>
            </div>
            {expanded["Availability"] ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {expanded["Availability"] && (
            <div className="pl-6 py-2 space-y-2">
              {["All", "Full Time", "Freelance/Project"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="availability"
                    value={option}
                    checked={availability === option}
                    onChange={() => setAvailability(option)}
                    className="accent-blue-500"
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Location Filter */}
        <div className="border-b">
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => toggleExpand("Location")}
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span className="font-medium">Location</span>
            </div>
            {expanded["Location"] ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {expanded["Location"] && (
            <div className="pl-6 py-2 space-y-2 text-left">
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm">Country/Region</label>
                <select
                  className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="">Select a Country/Region</option>
                  <option value="USA">Pakistan</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-gray-600 text-sm">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Tools Filter */}
        <div className="border-b">
          <div
            className="flex justify-between items-center py-2 cursor-pointer"
            onClick={() => toggleExpand("Tools")}
          >
            <div className="flex items-center gap-2">
              <Wrench size={18} />
              <span className="font-medium">Tools</span>
            </div>
            {expanded["Tools"] ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          {expanded["Tools"] && (
            <div className="pl-6 py-2 space-y-2 text-left bg-white shadow-md">
              <input
                type="text"
                placeholder="Start typing to see list"
                className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                value={searchTool}
                onChange={(e) => setSearchTool(e.target.value)}
              />
              <div className="text-gray-600 text-sm font-medium">
                Popular Tools
              </div>
              <ul className="text-gray-700">
                {popularTools
                  .filter((tool) =>
                    tool.toLowerCase().includes(searchTool.toLowerCase())
                  )
                  .map((tool) => (
                    <li key={tool} className="py-1">
                      {tool}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreSidebar;
