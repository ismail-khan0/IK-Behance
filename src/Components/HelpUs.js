import React from "react";

const HelpUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-2xl shadow-lg max-w-2xl mx-auto text-center mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">How You Can Help</h2>
      <p className="text-gray-600 mb-6">
        We’re building a creative community! Support us by sharing your work, giving feedback, and spreading the word.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-blue-600 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Submit Your Work
        </button>
        <button className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
          Give Feedback
        </button>
        <button className="bg-purple-500 text-white px-5 py-3 rounded-lg shadow-md hover:bg-purple-600 transition">
          Share with Friends
        </button>
      </div>
    </div>
  );
};

export default HelpUs;
