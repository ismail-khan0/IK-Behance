import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaPinterest, FaFacebook, FaLinkedin } from "react-icons/fa";
import DownloadTheApp from "./DownloadTheApp";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <footer className="bg-[#1c1a1a] text-white py-10 px-10 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h1 className="text-3xl font-bold">Bēhance</h1>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-left">Built For Creatives</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/behance">Try Behance Pro</Link>
              </li>
              <li>
                <Link to="/exploretools">Find Inspiration</Link>
              </li>
              <li>
                <Link to="/">Get Hired</Link>
              </li>
              <li>
                <Link to="">Sell Creative Assets</Link>
              </li>
              <li>
                <Link to="">Sell Freelance Services</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Find Talent</h3>
            <ul className="space-y-2">
              <li>
                <Link to="jobs">Post a Job</Link>
              </li>
              <li>
                <Link to="/exploretools?tab=Graphic%20Design">Graphic Designers</Link>
              </li>
              <li>
                <Link to="/exploretools?tab=Photography">Photographers</Link>
              </li>
              <li>
                <Link to="/exploretools?tab=Video%20Editors">Video Editors</Link>
              </li>
              <li>
                <Link to="/exploretools?tab=Website%20Designers">Web Designers</Link>
              </li>
              <li>
                <Link to="/exploretools?tab=Illustrators">Illustrators</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Behance</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about">About Behance</Link>
              </li>
              <li>
                <a href="https://portfolio.adobe.com/" target="_blank" rel="noopener noreferrer">
                  Adobe Portfolio
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowPopup(true)}
                  className=""
                >
                  Download Behance App
                </button>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="https://www.adobe.com/careers.html" target="_blank">Careers</Link>
              </li>
              <li>
                <Link to="/helpus">Help Center</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Social</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaInstagram />
                <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaTwitter />
                <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  Twitter
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaPinterest />
                <Link to="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                  Pinterest
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaFacebook />
                <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaLinkedin />
                <Link to="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <span>© 2025 Adobe Inc. All rights reserved.</span>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            <Link to="#">English</Link>
            <Link to="#">TOU</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Community</Link>
            <Link to="#">Cookie preferences</Link>
            <Link to="#">Do not sell or share my personal information</Link>
          </div>
        </div>
      </div>
      
      <DownloadTheApp showPopup={showPopup} setShowPopup={setShowPopup} />
    </footer>
  );
}
