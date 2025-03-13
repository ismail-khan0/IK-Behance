import { useState } from "react";
import ik_img from "../images/ik-img.jpeg";
import Fibo_Studio from "../images/fibo_studio_logo.jpeg";

const owners = [
  { name: "Ismail Khan", country: "Pakistan", img: ik_img },
  { name: "Fibo Studio", country: "Pakistan", img: Fibo_Studio },
];

// Follow Button Component
function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={`px-3 py-1 text-xs font-medium border rounded-full transition ${
        isFollowing
          ? "bg-gray-200 text-gray-700 border-gray-400"
          : "bg-blue-600 text-white border-blue-600 hover:bg-blue-800"
      }`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
}

// Main Component
export default function Follow() {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow text-left">
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
            {/* Follow Button for each owner */}
            <FollowButton />
          </div>
        ))}
      </div>
    </div>
  );
}
