import React, { useState } from "react";
import { FaPlus, FaFolder, FaUpload, FaThumbsUp } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import Follow from "./Follow";
import Tools from "./Tools";
import img11 from "../images/ik.png";
import ShareProjectModal from "./ShareProjectModal";
import SocialAuthButtons from "./SocialAuthButtons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFollow, setShowFollow] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showAppreciate, setShowAppreciate] = useState(false); // ✅ Added showAppreciate state

  return (
    <>
      {/* Sidebar for Large Screens (lg and above) */}
      <div className="hidden lg:flex flex-col fixed right-4 top-28 space-y-4">
        {/* Profile Image and Follow Button */}
        <div
          className="relative w-10 h-10 right-[-10px] mb-8"
          onMouseEnter={() => setShowFollow(true)}
          onMouseLeave={() => setShowFollow(false)}
        >
          <img
            src={img11}
            alt="Profile"
            className="w-10 h-10 rounded-full border"
          />
          <button
            className="absolute bottom-0 right-[-2px] bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs border"
            aria-label="Follow"
            title="Follow"
          >
            <FaPlus />
          </button>
          {showFollow && (
            <div className="absolute top-full left-[-260px] mx-4 w-[250px] bg-white shadow-lg rounded-lg">
              <Follow />
            </div>
          )}
          <span className="text-sm">Follow</span>
        </div>

        {/* Tools Section */}
        <div
          className="flex flex-col items-center relative"
          onMouseEnter={() => setShowTools(true)}
          onMouseLeave={() => setShowTools(false)}
        >
          <button
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
            aria-label="Tools"
            title="Tools"
          >
            <SiAdobephotoshop />
          </button>
          <span className="text-sm">Tools</span>
          {showTools && (
            <div className="absolute left-[-250px] top-[-30px] bg-white w-[250px] shadow-lg rounded-lg">
              <Tools />
            </div>
          )}
        </div>

        {/* Save Section */}
        <div className="flex flex-col items-center">
          <Link to="/auth">
            <button
              className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
              aria-label="Save"
              title="Save"
            >
              <FaFolder />
            </button>
            <span className="text-sm">Save</span>
          </Link>
        </div>

        {/* Share Section */}
        <div className="flex flex-col items-center">
          <button
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-gray-200"
            aria-label="Share"
            title="Share"
            onClick={() => setIsOpen(true)}
          >
            <FaUpload />
          </button>
          <span className="text-sm">Share</span>
        </div>

        {/* Appreciate Section */}
        <div
          className="flex flex-col items-center relative"
          onMouseEnter={() => setShowAppreciate(true)}
          onMouseLeave={() => setShowAppreciate(false)}
        >
          <button
            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            aria-label="Appreciate"
            title="Appreciate"
          >
            <FaThumbsUp />
          </button>
          <span className="text-sm text-blue-600">Appreciate</span>

          {showAppreciate && (
            <div className="absolute left-[-250px] top-[-30px] bg-white w-[250px] shadow-lg rounded-lg">
              <SocialAuthButtons />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navbar for Small and Medium Screens (sm & md) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 flex justify-around py-2 shadow-md">
        <button className="flex flex-col items-center text-gray-600 hover:text-black">
          <SiAdobephotoshop className="text-xl" />
          <span className="text-xs">Tools</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 hover:text-black">
          <FaFolder className="text-xl" />
          <span className="text-xs">Save</span>
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-center text-gray-600 hover:text-black"
        >
          <FaUpload className="text-xl" />
          <span className="text-xs">Share</span>
        </button>

        {/* Appreciate Section in Bottom Navbar */}
        <div
          className="flex flex-col items-center relative"
          onMouseEnter={() => setShowAppreciate(true)}
          onMouseLeave={() => setShowAppreciate(false)}
        >
          {/* Appreciate Section in Bottom Navbar */}
          <button className="flex flex-col items-center text-gray-600 hover:text-black">
            <FaThumbsUp className="text-xl" />
            <span className="text-xs">Appreciate</span>
          </button>

          {showAppreciate && (
            <div className="absolute bottom-20 -translate-x-full bg-white w-[px] shadow-lg rounded-lg ">
              <SocialAuthButtons className="text-xl" />
            </div>
          )}
        </div>
      </div>

      {/* Share Modal */}
      <ShareProjectModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
