import { useRef } from "react";
import img1 from '../images/ShareFood.jpg';
import img2 from '../images/MoodBoard2.jpg';
import img3 from '../images/MoodBoard3.jpg';
import img4 from '../images/MoodBoard4.jpg';
import img5 from '../images/MoodBoard5.jpg';
import img6 from '../images/MoodBoard6.jpg';
import img7 from '../images/MoodBoard7.jpg';
import img8 from '../images/MoodBoard8.jpg';
import img0 from '../images/MoodBoard.png';
import img00 from '../images/MoodBoard-.jpg';
import { BiLike } from "react-icons/bi";
import { FaThumbsUp, FaEye, FaComment } from 'react-icons/fa';
import Footer from "./Footer";
import Videos from "./Videos";
import Conversation from "./Conversation";
import Follow from "./Follow";
import Tools from "./Tools";

export default function Fibo_Studio() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

// tages itmes
  const tags = [
    "Mobile app", "UI/UX", "SDG", 
    "Sustainability", "Case Study", 
    "fibo studio", "food sharing", 
    "Food waste", "Local Community", 
    "food donation"
  ];
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <header className="w-full pt-4 flex items-center justify-between max-w-5xl">
        <div className="flex items-center space-x-3">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <h1 className="text-lg font-semibold">
              Fudo - Food Share App Reducing Food Waste | Fibo Studio
            </h1>
            <p className="text-sm text-gray-500">Multiple Owners • Follow All</p>
          </div>
        </div>
      </header>

      <div className="relative w-full max-w-5xl my-6">
        <Videos videos="https://player.vimeo.com/video/1049560529?autoplay=1&loop=1&background=1" className="w-full pb-[55.25%]  aspect-video" />
        <img src={img1} alt="img1" className="w-full" />
        <img src={img0} alt="img0" className="w-full" />
        <img src={img2} alt="img2" className="w-full" />
        <img src={img3} alt="img3" className="w-full" />
        <Videos videos="https://player.vimeo.com/video/1048879812?autoplay=1&loop=1&background=1" className="w-full pb-[56%]  aspect-video" />
        <img src={img4} alt="img4" className="w-full" />
        <img src={img5} alt="img5" className="w-full" />
     
        <Videos videos="https://player.vimeo.com/video/1049552854?autoplay=1&loop=1&background=1" className="w-full pb-[64%]  aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049674635?autoplay=1&loop=1&background=1" className="w-full shadow-sm pb-[80.25%]  aspect-video" />
        <div className='shadow-sm'>
          <img src={img00} alt="img00" className="w-full" />
        </div>
        <Videos videos="https://player.vimeo.com/video/1049671314?autoplay=1&loop=1&background=1" className="w-full pb-[80.25%]  aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049677231?autoplay=1&loop=1&background=1" className="w-full pb-[75%] shadow-x  aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049671314?autoplay=1&loop=1&background=1" className="w-full pb-[80%] shadow-x  aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049552933?autoplay=1&loop=1&background=1" className="w-full pb-[70.25%] shadow-sm  aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049552933?autoplay=1&loop=1&background=1" className="w-full pb-[80.25%] shadow-r  aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049648830?autoplay=1&loop=1&background=1" className="w-full pb-[70.25%] shadow-sm  aspect-video" />
        <img src={img6} alt="img6" className="w-full" />
        <img src={img8} alt="img8" className="w-full" />
        <Videos videos="https://player.vimeo.com/video/1049274679?autoplay=1&loop=1&background=1" className="w-full pb-[19%] shadow-x aspect-video" />
        <Videos videos="https://player.vimeo.com/video/1049214649?autoplay=1&loop=1&background=1" className="w-full pb-[10.40%] aspect-video" />
        
        <div className="bg-black text-white p-6 flex flex-col items-center text-center space-y-4">
          <p>
            Need a little assistance?{" "}
            <a
              href="#"
              className="relative text-orange-400 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gray-400 before:transition-all before:duration-300 hover:before:bg-orange-400"
            >
              Book a FREE consultation
            </a>
          </p>
          
          <div className="flex space-x-2 text-green-400">
            <a href="#">LinkedIn</a>
            <span className="text-white">•</span>
            <a href="#">Dribbble</a>
            <span className="text-white">•</span>
            <a href="#">Facebook</a>
            <span className="text-white">•</span>
            <a href="#">Instagram</a>
            <span className="text-white">•</span>
            <a href="#">Threads</a>
            <span className="text-white">•</span>
            <a href="#">WhatsApp</a>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <p className="flex items-center space-x-2">
              <span>📩</span> 
              <a
                href="mailto:hello@fibostudio.com"
                className="relative text-blue-400 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gray-500 before:transition-all before:duration-300 hover:before:bg-gray-200"
              >
                ik8323253@gmail.com
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span>🌍</span> 
              <a href="https://www.fibostudio.com" className="relative text-blue-400 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-full before:bg-gray-500 before:transition-all before:duration-300 hover:before:bg-gray-500">
                www.ik-behance.com
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2 mt-4">
            <div className="bg-blue-700 p-3 rounded-full mt-16 text-2xl">
              <BiLike />
            </div>
            <h2 className="font-bold text-lg">
              Fudo - Food Share App Reducing Food Waste | Fibo Studio
            </h2>
            <p className="text-gray-400 text-sm">👍 292 👁️ 1K 💬 125</p>
            <p className="text-gray-500 text-xs">Published: January 23rd 2025</p>
          </div>
          
        </div>
        <div className="bg-[#1c1a1a] p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-white font-semibold">Md. Shamsul Alam</h2>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              Follow
            </button>
          </div>

          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              ❮
            </button>

            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-hidden scroll-smooth p-2"
            >
              {[
                {
                  img: img4,
                  title: "Fleet Top Management",
                  desc: "Multiple Owners",
                },
                {
                  img: img2,
                  title: "Scoozer - Shop & Ride",
                  desc: "Multiple Owners",
                },
                {
                  img: img1,
                  title: "Dream Car Renting Platform",
                  desc: "Branding UI/UX Design",
                },
                {
                  img: img3,
                  title: "Visual Identity & Mobile App Design",
                  desc: "Branding & UI/UX Designer",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden flex-shrink-0"
                >
                  <img
                    src={item.img}
                    alt="Project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
            >
              ❯
            </button>
          </div>
        </div>
      

        <div className="flex flex-col md:flex-row gap-6 p-6 max-w-6xl shadow-lg mx-auto">
      {/* Left Section - Comments */}
     <Conversation/>
      {/* Right Section - Project Details */}
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <Follow/>
        <div className="mb-6 p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold">Project Made For</h3>
          <p>Fibo Studio - Team</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="font-semibold text-gray-800">
        Fudo - Food Share App Reducing Food W...
      </h3>
      <p className="text-gray-600 text-sm mt-1">
        FUDO is a food sharing app that connects donors with recipients to reduce food waste by sharing food. It is designed to promote sustainable pra
      </p>
      <button className="text-blue-600 font-medium mt-1">Read More</button>

      {/* Engagement Section */}
      <div className="flex items-center text-gray-500 text-sm mt-3 space-x-4">
        <div className="flex items-center space-x-1">
          <FaThumbsUp />
          <span>297</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEye />
          <span>1.1K</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaComment />
          <span>125</span>
        </div>
      </div>

      {/* Publish Date */}
      <p className="text-gray-500 text-xs mt-2">Published: January 23rd 2025</p>
    </div>
       <Tools/>
       <div className="p-4 shadow-lg">
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
      </div>
    </div>
      </div>

    </div>
  );
}