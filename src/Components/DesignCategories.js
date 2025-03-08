import React from "react";
const categories = [
    { name: "Graphic Design", image: "/path-to-image-1.jpg" },
    { name: "Logo Design", image: "/path-to-image-2.jpg" },
    { name: "Branding Services", image: "/path-to-image-3.jpg" },
    { name: "Website Design", image: "/path-to-image-4.jpg" },
    { name: "Social Media Design", image: "/path-to-image-5.jpg" },
    { name: "Illustrations", image: "/path-to-image-6.jpg" },
    { name: "Architecture & Interior Design", image: "/path-to-image-7.jpg" },
    { name: "UI/UX Design", image: "/path-to-image-8.jpg" },
  ];
  
  export default function DesignCategories() {
    return (
      <div className="bg-gray-100 py-10 mt-4">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-white text-black font-medium px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all">
              Browse All Categories
            </button>
          </div>
        </div>
      </div>
    );
  }
  