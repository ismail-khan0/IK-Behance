import React from "react";
import Card_Behance from "./Card_Behance";
import Button from "./Button";
import { TrendingUp, DollarSign, Sparkles } from 'lucide-react'; // Import Lucide icons

const UpgradeToPro = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 my-8">
      <h1 className="text-5xl font-bold text-center mb-10">Why upgrade to Pro?</h1>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
      <Card_Behance
  icon={TrendingUp}
  color="blue" // Ensure the color is a valid Tailwind color
  title="Expand Your Reach"
  description="Reach more clients and collaborators and get your work seen by the right people at the right time."
  link="Learn More"
  className="border-blue-500 shadow-lg"
/>

<Card_Behance
  icon={DollarSign}
  color="green"
  title="Grow Your Earnings"
  description="Get exclusive access to premium freelance jobs from top clients—with no platform fees."
  link="Learn More"
  className="border-green-500 shadow-lg"
/>

<Card_Behance
  icon={Sparkles}
  color="purple"
  title="Stand Out from the Crowd"
  description="Showcase your unique brand with customizations that match who you are as a creative."
  link="Learn More"
  className="border-purple-500 shadow-lg"
/>

      </div>

      {/* Call-to-Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4">
  <Button
    className="bg-black hover:bg-gray-800 text-white text-base sm:text-base md:text-base lg:text-lg px-4 sm:px-6 py-2"
    btnText="Start Free Trial"
  />
  <Button
    className="bg-gray-200 hover:bg-gray-400 text-base sm:text-base md:text-base lg:text-lg px-4 sm:px-6 py-2"
    btnText="Compare Plans"
  />
</div>

    </div>
  );
};

export default UpgradeToPro;
