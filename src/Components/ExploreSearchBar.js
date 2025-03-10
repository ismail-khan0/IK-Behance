import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

const ExploreSearchBar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value); // Pass search value to parent
  };

  return (
    <div className="relative flex justify-between mb-6 items-center">
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
            <li className="px-4 py-[2px] hover:bg-gray-100 font-semibold text-blue-600">
              <Link to="/recommended">Recommended</Link>
            </li>
            <li className="px-4 py-[2px] hover:bg-gray-100">
              <Link to="/curated">Curated</Link>
            </li>
            <li className="px-4 py-[2px] hover:bg-gray-100">
              <Link to="/most-viewed">Most Viewed</Link>
            </li>
            <li className="px-4 py-[2px] hover:bg-gray-100">
              <Link to="/most-discussed">Most Discussed</Link>
            </li>
            <li className="px-4 py-[2px] hover:bg-gray-100">
              <Link to="/most-recent">Most Recent</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExploreSearchBar;
