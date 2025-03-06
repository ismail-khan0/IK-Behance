import React from 'react';
import bgimage from '../images/bg-image.webp'
const tools = [
  { name: 'Photoshop', icon: 'Ps', bg: 'bg-gray-800', image: bgimage },
  { name: 'Illustrator', icon: 'Ai', bg: 'bg-orange-600', image: bgimage },
  { name: 'After Effects', icon: 'Ae', bg: 'bg-purple-600', image: bgimage },
  { name: 'Premiere Pro', icon: 'Pr', bg: 'bg-blue-800', image: bgimage },
  { name: 'XD', icon: 'Xd', bg: 'bg-pink-700', image: bgimage }
];

export default function Tools() {
  return (
    <div className="p-4 rounded-lg shadow-md my-2">
      <h3 className="font-semibold text-gray-700 mb-3">TOOLS</h3>
      <div className="space-y-2">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className={`flex items-center justify-center p-2 rounded-sm overflow-hidden relative ${tool.bg}`}
            style={{
              backgroundImage: `url(${tool.image})`,
              backgroundSize: 'cover',
              backgroundBlendMode: 'multiply'
            }}
          >
            <div className="flex items-center space-x-3 text-white">
              <span className="text-sm px-1 rounded-sm bg-blue-500 font-bold">{tool.icon}</span>
              <p className="font-medium">{tool.name}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-sm mt-3">
        Figma, Adobe Photoshop, Figma
      </p>
    </div>
  );
}
