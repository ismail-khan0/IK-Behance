import React from "react";
import graphic from '../images/freelance/graphic.jpeg'
import Logo from '../images/freelance/logo.jpg'
import branding from '../images/freelance/branding.png'
import webdesign from '../images/freelance/webdesign.jpeg'
import social from '../images/freelance/social.jpeg'
import illustration from '../images/freelance/illustration.png'
import architicture from '../images/freelance/architicture.jpeg'
import UIUX from '../images/freelance/UIUX.jpeg'

const categories = [
    { name: "Graphic Design", image: graphic },
    { name: "Logo Design", image: Logo },
    { name: "Branding Services", image: branding },
    { name: "Website Design", image: webdesign },
    { name: "Social Media Design", image: social },
    { name: "Illustrations", image: illustration},
    { name: "Architecture & Interior Design", image: architicture},
    { name: "UI/UX Design", image: UIUX },
  ];
  
  export default function DesignCategories() {
    return (
      <div className="bg-gray-100 py-10 mt-4">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white font-semibold shadow-lg text-2xl text-shadow-[0_2px_4px_rgb(99_102_241_/_0.8)] text-white text-xl md:text-2xl leading-snug font-manrope font-extrabold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button onClick={()=>window.location.href='/jobs'} className="bg-white text-blue-500 font-medium px-6 py-2 rounded-full border border-gray-400 hover:bg-black hover:text-white transition-all">
              Browse All Categories
            </button>
          </div>
        </div>
      </div>
    );
  }
  