import React from 'react';

export default function Button({ btnText, onClick, className = '' }) {
  return (
    <button
      onClick={onClick} // ✅ Corrected casing
      className={`px-4 py-1 text-blue-600 bg-[rgba(245,248,255)] hover:text-blue-800 border rounded-full ${className}`}
    >
      {btnText}
    </button>
  );
}
