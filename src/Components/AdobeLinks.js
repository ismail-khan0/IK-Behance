import React from "react";
import adobe from '../images/adobe.png'
import adobe2 from '../images/adobe2.jpeg'
import ik from '../images/ik.png'

const links = [
  {
    id: 1,
    logo: adobe,
    title: "Go to adobe.com",
    description: "Access your apps, services, files, and more",
    link: "https://www.adobe.com/?promoid=TTGWL148",
  },
  {
    id: 2,
    logo: adobe2,
    title: "Get Adobe Express free",
    description: "Quiqe make thoudend of free templates",
    link: "https://www.adobe.com/express/?geocheck=on&mv=other&promoid=8WLD4Y3J",
  },
  {
    id: 3,
    logo: ik,
    title: "7 day free trial of Behance Pro",
    description: "Supercharge your creative career with Behance Pro",
    link: "/pricing",
  },
];

const AdobeLinks = () => {
  return (
    <div className="max-w-md mx-auto space-y-4 bg-white shadow-md p-4 rounded-md text-left">
      {links.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          className="flex items-center p-4 bg-blue-50 rounded-lg shadow-sm hover:bg-blue-100 transition"
        >
          <img src={item.logo} alt="" className="w-8 h-8 mr-4" />
          <div className="flex-1">
            <h3 className="text-blue-700 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
          <span className="text-blue-500 text-2xl font-bold">→</span>
        </a>
      ))}
    </div>
  );
};

export default AdobeLinks;
