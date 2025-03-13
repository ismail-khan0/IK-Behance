import React from "react";
import Button from "./Button";
import { TrendingUp } from "lucide-react";
import GetWork from "./GetWork";

export default function Expandreach() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center px-4 sm:px-6 py-10">
      <div className="text-center max-w-md sm:max-w-2xl">
        <div className="flex justify-center mb-4">
          <div className="p-3 sm:p-4 rounded-xl border border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] bg-white flex items-center justify-center">
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          </div>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Get your work seen by more clients and collaborators
        </h2>
        <Button
        onClick={()=>window.location.href='/pricing'}
  btnText="Start Free Trial"
  className="w-full sm:w-auto px-4 sm:px-6 py-2 hover:bg-blue-700 bg-blue-500 mt-4 text-white 
             sm:bg-green-500 md:bg-yellow-500 lg:bg-blue-600"
/>
      </div>
      <GetWork />
    </div>
  );
}
