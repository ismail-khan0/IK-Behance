import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

const ExploreSearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex justify-between mb-6 items-center">
      <Input
        type="text"
        placeholder="Search the creative world at work"
        className="w-full max-w-lg px-4 py-2 bg-white focus:outline-none"
      />

      {/* Dropdown Button & List */}
      <div className="relative">
        <Button
          btnText="Recommended"
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 border rounded-full bg-white text-black font-medium hover:bg-gray-100"
        />

        {isOpen && (
          <ul className="absolute left-[-10px] mt-1 w-40 bg-white border border-gray-300 rounded-md shadow-md text-left cursor-pointer">
            <li className="px-4 py-[2px] hover:bg-gray-100 font-semibold text-blue-600">Recommended</li>
            <li className="px-4 py-[2px] hover:bg-gray-100">  <Link to="/recommended">Recommended</Link></li>
            <li className="px-4 py-[2px] hover:bg-gray-100"><Link to="/curated">Curated</Link></li>
            <li className="px-4 py-[2px] hover:bg-gray-100"><Link to="/"> Most Viewed</Link></li>
            <li className="px-4 py-[2px] hover:bg-gray-100"><Link to="/"> Most Discussed</Link></li>
            <li className="px-4 py-[2px] hover:bg-gray-100"><Link to="/">Most Recent</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExploreSearchBar;
