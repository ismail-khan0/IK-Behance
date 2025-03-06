import React from 'react';
import { FaSearch } from "react-icons/fa";

function Input({ placeholder, value, onChange }) { // Add `value` and `onChange` props
  return (
    <div className="relative flex items-center w-64">
      <FaSearch className="absolute left-3 text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value} // Pass the `value` prop
        onChange={onChange} // Pass the `onChange` prop
        className="w-[1000px] pl-10 pr-4 py-1 border rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
}

export default Input;