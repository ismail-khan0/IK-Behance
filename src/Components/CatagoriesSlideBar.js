import React from "react";

const CategorySidebar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { label: "All", section: "All" },
    { label: "Logo Design", section: "Popular" },
    { label: "Branding Services", section: "Popular" },
    { label: "Social Media Design", section: "Popular" },
    { label: "Website Design", section: "Popular" },
    { label: "Illustrations", section: "Popular" },
    { label: "Packaging Design", section: "Popular" },
    { label: "Landing Page Design", section: "Popular" },
    { label: "UI/UX Design", section: "Popular" },
    { label: "Architecture & Interior Design", section: "Popular" },
    { label: "Logo Design", section: "Graphic Design" },
    { label: "Stationery Design", section: "Graphic Design" },
    { label: "Fonts & Typography", section: "Graphic Design" },
    { label: "Branding Services", section: "Graphic Design" },
  ];

  return (
    <aside className="w-72 p-4 border-r">
      <button className="bg-blue-600 text-white w-full py-2 rounded-lg flex items-center justify-center font-semibold text-lg">
        <span className="mr-2 text-xl">+</span> New Job
      </button>

      <div className="mt-6">
        <h2 className="font-bold text-lg text-left">Categories</h2>
        <ul className="mt-2 space-y-2 text-left">
          {["All", "Popular", "Graphic Design"].map((section) => (
            <div key={section}>
              {section !== "All" && (
                <h3 className="text-sm text-gray-500 mt-4 uppercase">
                  {section}
                </h3>
              )}
              {categories
                .filter((cat) => cat.section === section)
                .map((cat) => (
                  <li key={cat.label} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="category"
                      id={cat.label}
                      value={cat.label}
                      checked={selectedCategory === cat.label}
                      onChange={() => setSelectedCategory(cat.label)}
                      className="accent-blue-600"
                    />
                    <label htmlFor={cat.label} className="cursor-pointer">
                      {cat.label}
                    </label>
                  </li>
                ))}
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default CategorySidebar;