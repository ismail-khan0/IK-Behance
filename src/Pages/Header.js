import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Components/Input";
import GooglPlay from "../images/Googleplay.webp";
import Appstore from "../images/Appstore.png";
import Button from "../Components/Button";
import Notification from "../Components/Notification";
import { ChevronDown } from "lucide-react";
import adobe from "../images/adobe.png";
import AdobeLinks from "../Components/AdobeLinks";
import DownloadTheApp from "../Components/DownloadTheApp";

export default function Header() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [language, setLanguage] = useState("English");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle the menu state
  };

  // Ref for the mobile menu and button
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close mobile menu when clicking outside or on the button
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu AND not on the button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();
  const handleExploreToolsClick = (item) => {
    navigate(`/exploretools?tab=${encodeURIComponent(item)}`);
  };
  const handleFreelanceNavigation = (category) => {
    navigate(`/hirefreelancer?category=${encodeURIComponent(category)}`);
  };

  return (
    <>
      <header className="lg:flex hidden fixed top-0 left-0 w-full items-center justify-between p-2 border-b bg-white shadow-sm z-50">
        <div className="flex items-center space-x-6">
          {/* Behance Logo */}
          <Link to="/">
            <span className="text-2xl font-bold">IBē</span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-4 text-gray-700">
            <div className="relative group flex items-center space-x-1 h-5">
              <Link to="/explore" className="hover:text-black font-bold">
                Explore
              </Link>
              <ChevronDown size={18} className="mt-2" />

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 text-left hidden w-48 p-2 mt-1 bg-white border rounded-md shadow-md group-hover:block text-sm">
                {/* Bold Section */}
                <Link
                  to="/explore"
                  className="block px-4 py-1 font-semibold hover:bg-gray-100"
                >
                  Search & Explore
                </Link>
                <Link
                  to="/explore"
                  className="block px-4 py-1 font-semibold hover:bg-gray-100"
                >
                  Assets
                </Link>
                <Link
                  to="/explore"
                  className="block px-4 py-1 font-semibold hover:bg-gray-100"
                >
                  Curated Galleries
                </Link>

                {/* Divider */}
                <hr className="my-2 border-gray-300" />

                {/* Normal Text Section */}
                {[
                  "Best of Behance",
                  "Graphic Design",
                  "Illustration",
                  "Photography",
                  "UI/UX",
                  "3D Art",
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleExploreToolsClick(item)}
                    className="block px-4 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link to="/jobs" className="hover:text-black font-bold">
              Jobs
            </Link>
            <Link
              to="/behance"
              className="flex items-center space-x-1 hover:text-black font-bold h-5"
            >
              <span>Behance</span>
              <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-1 py-[2px] rounded-md">
                PRO
              </span>
            </Link>
          </nav>

          {/* Hire Freelancers Dropdown */}
          {/* Freelance Projects Dropdown */}
          <div className="relative group flex items-center space-x-1">
            <Link
              to="hireFreelancer"
              className="hover:text-black font-bold flex items-center gap-2"
            >
              Freelance Projects
            </Link>
            <ChevronDown size={18} className="mt-1" />

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 hidden p-4 mt-2 bg-white border rounded-md shadow-md group-hover:block w-52 text-sm">
              {/* Main Options */}
              <div>
                <button
                  onClick={() => handleFreelanceNavigation("Find Creatives")}
                  className="flex px-2 py-1 font-semibold hover:bg-gray-100 w-full text-left"
                >
                  Find Creatives
                </button>
                <button
                  onClick={() => handleFreelanceNavigation("Hiring on Behance")}
                  className="flex px-2 py-1 font-semibold hover:bg-gray-100 w-full text-left"
                >
                  Hiring on Behance
                </button>
                <button
                  onClick={() =>
                    handleFreelanceNavigation("New Freelance Project")
                  }
                  className="flex px-2 py-1 font-semibold hover:bg-gray-100 w-full text-left"
                >
                  New Freelance Project
                </button>
              </div>

              {/* Divider */}
              <hr className="my-2 border-gray-300 text-left" />

              {/* Subcategories */}
              {[
                "Logo Designers",
                "Brand Designers",
                "Website Designers",
                "Illustrators",
                "Social Media Designers",
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleExploreToolsClick(item)}
                  className="block px-2 py-1 text-gray-600 hover:bg-gray-100 cursor-pointer text-left"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Input and Icon */}
          <div className="relative flex items-center">
            {/* Search Input */}
            <div
              className={`absolute right-10 bg-white transition-all duration-300 ${
                showSearchInput ? "w-96 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ zIndex: 1 }}
            >
              <Input
                placeholder="Search"
                className={`p-2 w-[190px] ${
                  showSearchInput ? "block" : "hidden"
                }`}
              />
            </div>

            {/* Search Icon */}
            <button
              onClick={toggleSearchInput}
              className="p-2 text-gray-700 text-xl border rounded-full hover:text-black"
              style={{ zIndex: 2 }}
            >
              <FaSearch />
            </button>
          </div>

          {/* Notification Bell Button */}
          <div className="relative group">
            <button className="text-gray-700 text-xl hover:text-black">
              <FaBell />
            </button>

            {/* Notification Dropdown (Hidden by Default, Shown on Hover) */}
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              <Notification />
            </div>
          </div>

          {/* Authentication Buttons */}
          <Link
            to="/auth?form=login"
            className="px-4 py-1 text-blue-600 bg-[rgba(245,248,255)] hover:text-blue-800 border rounded-full"
          >
            Log In
          </Link>
          <Link
  to="/auth?form=signup"
  className="px-4 py-1 items-center text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-700 border rounded-full"
>
  Sign Up
</Link>


          {/* Adobe Icon */}
          <div className="relative group text-lg font-bold">
            <img className="w-12 h-10" src={adobe} alt="Adobe" />

            {/* This div will be hidden until hover */}
            <div className="absolute hidden group-hover:block left-[-400px]">
              <AdobeLinks />
            </div>
          </div>
        </div>
      </header>
      <header className="lg:hidden flex fixed top-0 left-0 w-full items-center justify-between p-3 border-b bg-white text-black shadow-sm z-50">
        <div className="flex items-center space-x-4">
          {/* Menu Button */}
          <button
            ref={menuButtonRef}
            className="text-black text-xl"
            onClick={toggleMobileMenu}
          >
            <FaBars />
          </button>
          <Link to="/" className="text-2xl font-bold">
            IBē
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-12 left-0 w-72 bg-white text-black text-left p-5 shadow-lg z-50"
          >
            <ul className="space-y-2 text-lg">
              <li className="font-bold">
                <Link to="/explore">Assets</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-black font-bold">
                  Jobs
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/behance"
                  className="flex items-center space-x-1 hover:text-black font-bold h-5"
                >
                  <span>Behance</span>
                  <span className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-bold px-1 py-[2px] rounded-md">
                    PRO
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/hirefreelancer"
                  className="hover:text-black font-bold"
                >
                  Hire Freelancers
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <img src={Appstore} alt="App Store" className="w-40 mb-2" />
              <img src={GooglPlay} alt="Google Play" className="w-40" />
            </div>

            <select
              className="text-left mt-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>

            <ul className="space-y-[2px] ml-1">
              <li>
                <Link to="/about" className="hover:text-black">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-black">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.adobe.com/legal/terms.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  TOU
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.adobe.com/privacy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.behance.net/misc/community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="https://help.behance.net/hc/en-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black"
                >
                  Help
                </Link>
              </li>

              <li>
                <Link to="/personal-info" className="hover:text-black">
                  Do not sell my personal info
                </Link>
              </li>
              <Link to="/auth">
                <Button
                  btnText="Sign Up"
                  className="bg-blue-500 text-white flex justify-center mt-4 text-center"
                />
              </Link>
            </ul>
          </div>
        )}

        <div className="flex items-center space-x-4">
          <Link to="/explore" className="text-xl text-black hover:opacity-80">
            <FaSearch />
          </Link>
          <Link
            to="/notification"
            className="text-xl text-black hover:opacity-80"
          >
            <button aria-label="Notifications">
              <FaBell />
            </button>
          </Link>

          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold hover:bg-blue-700"
          >
            Use App
          </button>
        </div>
        <DownloadTheApp showPopup={showPopup} setShowPopup={setShowPopup} />
      </header>
    </>
  );
}
