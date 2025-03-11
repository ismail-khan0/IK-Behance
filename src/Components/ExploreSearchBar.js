import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const ExploreSearchBar = ({ onSearch, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleButtonClick = (label) => {
    onSelectCategory(label); // Pass selected category to parent
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="relative flex flex-col mb-6">
      <div className="flex justify-between items-center">
        <Input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search the creative world at work"
          className="w-full max-w-lg px-4 py-2 text-lg bg-gray-100 focus:outline-none"
        />

        {/* Dropdown Button & List */}
        <div className="relative">
          <Button
            btnText="Recommended"
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 sm:px-4 sm:py-3 border rounded-full border-gray-300 hover:border-black hover:text-blue-500 focus:border-blue-500 bg-blue-600 text-white font-medium text-sm sm:text-base"
          />

          {isOpen && (
            <ul className="absolute left-[-10px] mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-md text-left cursor-pointer">
              {["Recommended", "Curated", "Most Viewed", "Most Discussed", "Most Recent"].map((item) => (
                <li key={item} className="px-4 py-[2px] hover:bg-gray-100">
                  <button onClick={() => handleButtonClick(item)} className="w-full text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreSearchBar;
