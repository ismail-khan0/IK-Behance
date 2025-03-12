import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center text-white text-center mt-16">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-600 to-black opacity-30"></div>
      <h2 className="text-sm font-light uppercase tracking-wide z-10">
        Behance — the world's largest creative network
      </h2>
      <h1 className="text-5xl md:text-6xl font-bold mt-4 z-10">
        Share your work. <br />
        Grow your career. <br />
        Get paid.
      </h1>
      <Link to='/auth' className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full z-10">
       Sign Up
      </Link>
      <div className="flex flex-wrap justify-center gap-6 mt-16 z-10">
        <div className="bg-gray-900 rounded-xl p-6 text-center w-64">
          <h3 className="text-3xl font-bold">50M+</h3>
          <p className="text-sm mt-2">
            Over 50 million members in the Behance community
          </p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center w-64">
          <h3 className="text-3xl font-bold">Billions</h3>
          <p className="text-sm mt-2">
            Creative work gets seen billions of times every year on Behance
          </p>
        </div>
        <div className="bg-gray-900 rounded-xl p-6 text-center w-64">
          <h3 className="text-3xl font-bold">2006</h3>
          <p className="text-sm mt-2">
            Founded in 2006, Behance has been a trusted network for over 15 years
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
