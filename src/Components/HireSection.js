import React from "react";
import hireMe from '../images/hire-landing-why.webp'
import { FaMagic, FaRulerCombined, FaLock, FaRocket } from "react-icons/fa";
import Button from "./Button";
const HireSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gray-50">
      {/* Left Text Section */}
      <div className="max-w-lg text-left">
      <h2 className="text-4xl font-bold text-gray-900">Why hire on Behance?</h2>
      <p className="text-lg text-gray-600 mt-3">
        Hiring freelance talent on Behance is seamless and secure.
      </p>

      <div className="mt-6 space-y-4">
        <div className="flex items-start space-x-3">
          <FaMagic className="text-blue-500 text-xl" />
          <div>
            <h3 className="font-semibold text-gray-900">
              Access to the world’s best creators
            </h3>
            <p className="text-gray-600">
              Get matched from a pool of over 2 million qualified freelancers.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaRulerCombined className="text-blue-500 text-xl" />
          <div>
            <h3 className="font-semibold text-gray-900">
              All the right tools in one place
            </h3>
            <p className="text-gray-600">
              Start conversations, share files, and join video calls with candidates.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaLock className="text-blue-500 text-xl" />
          <div>
            <h3 className="font-semibold text-gray-900">Secure payments</h3>
            <p className="text-gray-600">
              Pay seamlessly and securely with a debit or credit card on Behance.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <FaRocket className="text-blue-500 text-xl" />
          <div>
            <h3 className="font-semibold text-gray-900">
              No platform fee with Behance Pro
            </h3>
            <p className="text-gray-600">
              Platform fees are waived for freelancers with Behance Pro.
            </p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <Button btnText=' Get Started' className="bg-blue-600 text-white px-6 py-2  font-semibold"/>
         
        
        <Button btnText=" Browse Freelancers" className="border border-gray-400 px-6 py-2 font-semibold text-gray-900"/>
         
      
      </div>
    </div>

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0">
        <img
          src={hireMe}
          alt="Freelancer network"
          className="max-w-md md:max-w-lg"
        />
      </div>
    </section>
  );
};

export default HireSection;
