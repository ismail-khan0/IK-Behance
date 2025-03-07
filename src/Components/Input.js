import React from "react";
import { FaSearch } from "react-icons/fa";

function Input({ placeholder, value, onChange ,className=''}) {
  // Add `value` and `onChange` props
  return (
    <div className="relative flex items-center w-1/2">
      {" "}
      {/* Apply width here */}
      <FaSearch className="absolute left-3 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`pl-10 pr-4  border rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full ${className}`}
      />
    </div>
  );
}

export default Input;
