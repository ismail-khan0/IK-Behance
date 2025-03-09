import { BiLike } from "react-icons/bi";
import { FaEnvelope, FaGlobe } from "react-icons/fa";
import { FaThumbsUp, FaEye, FaComment } from "react-icons/fa";

const Consultation = () => {
  return (
    <div className="bg-black text-white p-6 flex flex-col items-center text-center space-y-4">
      <p className="text-sm sm:text-base">
        Need a little assistance?{" "}
        <a
          href="#"
          className="relative text-orange-400 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gray-400 before:transition-all before:duration-300 hover:before:bg-orange-400"
        >
          Book a FREE consultation
        </a>
      </p>

      {/* Social Media Links */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 text-green-400">
        <a href="#">LinkedIn</a>
        <span className="hidden sm:inline text-white">•</span>
        <a href="#">Dribbble</a>
        <span className="hidden sm:inline text-white">•</span>
        <a href="#">Facebook</a>
        <span className="hidden sm:inline text-white">•</span>
        <a href="#">Instagram</a>
        <span className="hidden sm:inline text-white">•</span>
        <a href="#">Threads</a>
        <span className="hidden sm:inline text-white">•</span>
        <a href="#">WhatsApp</a>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
        <p className="flex items-center space-x-2 text-sm sm:text-base">
          <FaEnvelope />
          <a
            href="mailto:ik8323253@gmail.com"
            className="relative text-blue-400 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gray-500 before:transition-all before:duration-300 hover:before:bg-gray-200"
          >
            ik8323253@gmail.com
          </a>
        </p>
        <p className="flex items-center space-x-2 text-sm sm:text-base">
          <FaGlobe />
          <a
            href="https://www.ik-behance.com"
            className="relative text-blue-400 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gray-500 before:transition-all before:duration-300 hover:before:bg-gray-500"
          >
            www.ik-behance.com
          </a>
        </p>
      </div>

      {/* Project Showcase */}
      <div className="flex flex-col items-center space-y-2 mt-4 w-full sm:max-w-xs md:max-w-md">
        <div className="bg-blue-700 p-3 rounded-full mt-8 sm:mt-12 text-2xl">
          <BiLike />
        </div>
        <h2 className="font-bold text-lg sm:text-xl text-center">
          Fudo - Food Share App Reducing Food Waste | Fibo Studio
        </h2>
        <p className="text-gray-400 text-sm flex items-center space-x-2">
          <FaThumbsUp /> <span>292</span>
          <FaEye /> <span>1K</span>
          <FaComment /> <span>125</span>
        </p>
        <p className="text-gray-500 text-xs">Published: January 23rd 2025</p>
      </div>
    </div>
  );
};

export default Consultation;
