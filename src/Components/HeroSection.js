import React from "react";
import Button from "../Components/Button";

const HeroSection = ({freelanceProjects}) => {
  return (
    <div className="text-center mt-12">
      <h1 className="text-5xl font-bold">Hire The World’s Best Freelancers on Behance</h1>
      <p className="text-lg text-gray-600 mt-4">
        Create a project to get matched with freelancers or start browsing
      </p>
      <div className="mt-6 flex space-x-4 justify-center">
        <Button
          btnText="Get Started"
          onClick={freelanceProjects}
          className="bg-blue-600 text-white px-6 py-2 text-lg font-semibold hover:bg-blue-700"
        />
        <Button
          btnText="Browse Freelancers"
          onClick={()=>window.location.href='/jobs'}
          className="bg-gray-200 text-black px-6 py-2 text-lg font-semibold hover:bg-gray-300"
        />
      </div>
    </div>
  );
};

export default HeroSection;