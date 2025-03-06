import React from 'react';
import img10 from '../images/MoodBoard3.jpg'
const owners = [
  { name: "Ismail Khan", country: "Pakistan", img: {img10} },
  { name: "Fibo Studio", country: "Pakistan", img: "https://via.placeholder.com/40" }
];

export default function Follow() {
  return (
    <div className="mb-6 p-4  bg-white rounded-lg shadow">
      <p className="font-semibold text-gray-700 mb-3 text-xs">OWNERS</p>
      <div className="space-y-4">
        {owners.map((owner, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={owner.img} alt={owner.name} className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-medium text-gray-800">{owner.name}</p>
                <p className="text-sm text-gray-500">{owner.country}</p>
              </div>
            </div>
            <button className="px-3 py-1 text-xs text-white font-medium border border-blue-600 bg-blue-600 rounded-full hover:bg-blue-800">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
