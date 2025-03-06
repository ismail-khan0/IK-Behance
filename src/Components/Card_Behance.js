import React from 'react';

// Define a color mapping object
const colorClasses = {
  blue: "text-blue-500 border-blue-500 ",
  green: "text-green-500 border-green-500",
  purple: "text-purple-500 border-purple-500",
};

export default function Card_Behance({ icon: Icon, color, title, description, link, className = "" }) {
  return (
    <div className={`border rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all ${className}`}>
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-xl border bg-white shadow-2xl ${colorClasses[color] || "text-gray-500"}`}>
          <Icon className={`w-8 h-8 ${colorClasses[color] || "text-gray-500 "}`} /> {/* Apply color */}
        </div>
      </div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <a href={link} className={`mt-3 inline-block ${colorClasses[color] || "text-gray-500"}`}>
        {link} &darr;
      </a>
    </div>
  );
}
