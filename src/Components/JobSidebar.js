import react from "react";

const JobSidebar = ({ categories, selectedCategory, setSelectedCategory, isSidebarOpen }) => {
    return (
      <aside className={`${isSidebarOpen ? "block" : "hidden"} sm:block w-full sm:w-72 p-4 border-r`}>
        <button className="bg-blue-600 text-white w-full py-2 rounded-full flex items-center justify-center font-semibold text-lg">
          <span className="mr-2 text-xl">+</span> New Job
        </button>
  
        <div className="mt-6">
          <h2 className="font-bold text-lg text-left">Categories</h2>
          <ul className="mt-2 space-y-2 text-left">
            {["All", "Popular", "Graphic Design"].map((section) => (
              <div key={section}>
                {section !== "All" && (
                  <h3 className="text-sm text-gray-500 mt-4 uppercase">{section}</h3>
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
                      <label htmlFor={cat.label} className="cursor-pointer">{cat.label}</label>
                    </li>
                  ))}
              </div>
            ))}
          </ul>
        </div>
      </aside>
    );
  };
  
  export default JobSidebar;
  