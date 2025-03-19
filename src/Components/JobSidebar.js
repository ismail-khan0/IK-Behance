import { useState } from "react";
import JobPostingModal from "./JobPostingForm";


const JobSidebar = ({ categories, selectedCategory, setSelectedCategory, isSidebarOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <aside className={`${isSidebarOpen ? "block" : "hidden"} sm:block w-full sm:w-72 p-4 border-r`}>
        <button onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white w-full py-2 rounded-full flex items-center justify-center font-semibold text-lg">
          <span className="mr-2 text-xl">+</span> New Job
        </button>

        <div className="mt-6">
          <h2 className="font-bold text-lg">Categories</h2>
          <ul className="mt-2 space-y-2">
            {categories.map((cat) => (
              <li key={cat.label} className="flex items-center space-x-2">
                <input type="radio" name="category" id={cat.label} value={cat.label}
                  checked={selectedCategory === cat.label}
                  onChange={() => setSelectedCategory(cat.label)}
                  className="accent-blue-600" />
                <label htmlFor={cat.label} className="cursor-pointer">{cat.label}</label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {isModalOpen && <JobPostingModal closeModal={() => setIsModalOpen(false)} categories={categories} />}
    </>
  );
};

export default JobSidebar;