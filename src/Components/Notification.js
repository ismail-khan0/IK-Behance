import React from "react";
import Button from "./Button";
import pro from "../images/pro.png";
import { Link } from "react-router-dom"; 
const Notification = () => {
  return (
    <div className="w-[400px] mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md mt-12 lg:mt-0">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-3">Your Notifications</h2>

      <hr className="mb-4" />
      <div className="flex items-start space-x-3">
      <h1 className="w-10 h-10 bg-blue-500 flex items-center justify-center text-white px-4 rounded-full text-sm">
  IBē
</h1>

        <div>
          <h3 className="text-md font-semibold text-left">
            Introducing Behance Pro
          </h3>
          <p className="mt-1 text-sm text-left">
            Upgrade to Behance Pro to access Pricing Guidance, profile
            customizations, advanced analytics, 0% platform fees, and more
            premium features designed to accelerate your career and help you
            earn more.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-4 p-3 bg-gray-100 rounded-lg flex items-center space-x-3">
        <img src={pro} alt="Behance Pro" className="w-16 h-16 rounded-md" />
        <div>
          <p className="text-sm font-medium">
            Unlock Your Creative Potential With Behance Pro
          </p>
          <Link to="/behance">
          <Button
            href="#"
            btnText="Start your 7 day free trial"
            className="mt-2 inline-block text-blue-600 hover:text-blue-700 bg-blue-100 hover:bg-blue-200 text-sm font-medium px-4 py-2 rounded-md"
          />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-3 text-xs text-gray-400">3 months ago</p>
    </div>
  );
};

export default Notification;
