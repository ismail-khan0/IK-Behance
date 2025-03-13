import React from "react";
import hireMe from "../images/hire-landing-why.webp";
import { FaMagic, FaRulerCombined, FaLock, FaRocket } from "react-icons/fa";
import Button from "./Button";

const HireSection = ({setProjects}) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-12 bg-gray-50">
      {/* Left Text Section */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Why hire on Behance?
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Hiring freelance talent on Behance is seamless and secure.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              icon: <FaMagic className="text-blue-500 text-xl" />,
              title: "Access to the world’s best creators",
              desc: "Get matched from a pool of over 2 million qualified freelancers.",
            },
            {
              icon: <FaRulerCombined className="text-blue-500 text-xl" />,
              title: "All the right tools in one place",
              desc: "Start conversations, share files, and join video calls with candidates.",
            },
            {
              icon: <FaLock className="text-blue-500 text-xl" />,
              title: "Secure payments",
              desc: "Pay seamlessly and securely with a debit or credit card on Behance.",
            },
            {
              icon: <FaRocket className="text-blue-500 text-xl" />,
              title: "No platform fee with Behance Pro",
              desc: "Platform fees are waived for freelancers with Behance Pro.",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              {item.icon}
              <div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <Button
            btnText="Get Started"
            onClick={setProjects}
            className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 font-semibold"
          />
          <Button
            btnText="Browse Freelancers"
            onClick={()=>window.location.href='/jobs'}
            className="border border-gray-400 px-6 py-2 font-semibold hover:bg-black hover:text-black"
          />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="mt-10 md:mt-0 flex justify-center">
        <img
          src={hireMe}
          alt="Freelancer network"
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg"
        />
      </div>
    </section>
  );
};

export default HireSection;
