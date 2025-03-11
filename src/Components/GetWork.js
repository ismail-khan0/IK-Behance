import React from "react";
import Button from "./Button";

export default function GetWork() {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-10 px-4 sm:px-6">
      {/* First Feature */}
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center shadow-lg p-4 sm:p-6 rounded-lg">
        <div className="relative">
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">
            See who's viewed your profile and projects
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
            Get detailed insights on who's engaging with your work and how they found you, so you
            can follow up with potential clients and collaborators.
          </p>
        </div>
      </div>

      {/* Second Feature */}
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center shadow-lg p-4 sm:p-6 rounded-lg">
        <div className="relative">
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-gray-900">Get noticed</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg">
            Schedule your projects to publish at a set day/time to get maximum engagement with your
            audience.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 sm:px-10 py-8 sm:py-12 rounded-lg text-center lg:text-left">
  <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
    <span className="text-5xl sm:text-6xl lg:text-7xl font-bold">45%</span>
    <div className="w-full sm:w-[100px] md:w-[100px] lg:w-[1px] h-[1px] lg:h-20 bg-white"></div>
    <p className="leading-snug text-lg sm:text-xl lg:text-2xl text-gray-200">
      Pro members see their views and <br /> engagement increase by an average of{" "}
      <span className="font-bold block text-white">45% in their first month</span>
    </p>
  </div>
  <Button
    btnText="Start Free Trial"
    className="bg-white text-blue-600 font-semibold px-4 sm:px-6 py-2 rounded-full shadow-md mt-6 lg:mt-0 text-sm sm:text-base"
  />
</div>
    </div>
  );
}
