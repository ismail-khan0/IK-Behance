import React from "react";
import { ChevronDown, SlidersHorizontal, ArrowLeft } from "lucide-react";
import Button from './Button'
const ExploreSidebar = ({ selected, setSelected }) => {
  const categories = ["Projects", "Assets", "Images", "People"];

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
            className={`   transition duration-200 
              ${selected === item ? "bg-blue-500 text-white font-semibold" : "bg-gray-100 text-gray-700"}
             
              `}
         />
         
        
        ))}
      </div>

      {/* Expandable Filters */}
      <div className="mt-4 space-y-2">
        {[
          { label: "Creative Fields", icon: "◻️" },
          { label: "Availability", icon: "🔍" },
          { label: "Location", icon: "📍" },
          { label: "Tools", icon: "🛠" },
          { label: "Color", icon: "🌈" },
        ].map(({ label, icon }) => (
          <div
            key={label}
            className="flex justify-between items-center py-2 border-b cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{label}</span>
            </div>
            <ChevronDown size={18} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSidebar;
