import React from "react";
import Button from "./Button";
import { TrendingUp } from 'lucide-react';
import GetWork from "./GetWork";

export default function Expandreach() {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col items-center  py-10">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-4">
          <div className="p-4 rounded-xl border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] bg-white flex items-center justify-center">
      <TrendingUp className="w-8 h-8 text-blue-500" />
    </div>
          </div>
          <h2 className="text-5xl font-bold text-gray-900">Get your work seen by more clients and collaborators</h2>
          <Button btnText="Start Free Trial " className="px-6 py-2 bg-blue-500 mt-4 text-white "/>
        </div>
<GetWork/>
    

      </div>
    );
  }
  