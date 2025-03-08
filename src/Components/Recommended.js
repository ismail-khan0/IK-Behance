import react from "react";
import ExploreSearchBar from "./ExploreSearchBar";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Recommended() {
    const items = [
      {
        id: 1,
        title: "Sonos Arc Ultra",
        author: "Multiple Owners",
        likes: "1.2K",
        views: "9.9K",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fdrink&psig=AOvVaw3bNo-27EhqsiAuF_dNqzP9&ust=1741508549063000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIjfooSH-osDFQAAAAAdAAAAABAJ.png",
      },
      {
        id: 2,
        title: "Evoque",
        author: "Multiple Owners",
        likes: "1.1K",
        views: "9.2K",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 3,
        title: "Miyako Iced Matcha Branding",
        author: "Fulya Kuzu",
        likes: "287",
        views: "1.6K",
        image: "https://via.placeholder.com/300",
      },
      {
        id: 4,
        title: "Houert",
        author: "Allan Andrade",
        likes: "352",
        views: "3K",
        image: "https://via.placeholder.com/300",
      },
    ];
  
    return (
<>
      <div className="p-6 mt-16">
        <ExploreSearchBar/>
        <hr/>
        <div className="flex justify-between mt-4 ">
        <p className="text-sm font-bold mb-4">10000+ Results</p>
        <p className="  mb-4">Clear Filters</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.author}</p>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>👍 {item.likes}</span>
                  <span>👀 {item.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center py-10 mt-10">
      <p className="text-gray-800 text-center">
        <Link to='/auth' className="font-semibold underline cursor-pointer">Sign up</Link> or{" "}
        <Link to='/auth' className="font-semibold underline cursor-pointer">Sign in </Link> to your account to view more work personalized to your preferences.
      </p>

      <div className="flex flex-col items-center mt-4">
        <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full">
          Sign Up With Email
        </button>

        <div className="flex items-center gap-3 mt-4">
          <span className="text-gray-500">or</span>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
            <FaApple className="text-black text-2xl" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
            <FaFacebook className="text-blue-600 text-2xl" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300">
            <FaGoogle className="text-red-500 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  
      </div>
        <Footer/>
        </>
    );
  }
  