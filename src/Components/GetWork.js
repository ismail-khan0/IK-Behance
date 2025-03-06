import React from 'react'
import Button from './Button'

export default function GetWork() {
  return (
    <div className="max-w-6xl mx-auto py-10 space-y-10">
      {/* First Feature */}
      <div className="grid md:grid-cols-2 gap-6 items-center shadow-lg">
        <div className="relative">
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold ">See who's viewed your profile and projects</h2>
          <p className="text-gray-600 mt-2">
            Get detailed insights on who's engaging with your work and how they found you, so you
            can follow up with potential clients and collaborators.
          </p>
        </div>
      </div>

      {/* Second Feature */}
      <div className="grid md:grid-cols-2 gap-6 items-center shadow-lg">
        <div className="relative">
          <video className="w-full rounded-lg shadow-lg" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Get noticed</h2>
          <p className="text-gray-600 mt-2">
            Schedule your projects to publish at a set day/time to get maximum engagement with your
            audience.
          </p>
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-700 text-white px-10 py-12 rounded-lg">
      <div className="flex items-center space-x-6">
        <span className="text-7xl font-bold">45%</span>
        <div className='w-[1px] h-20 bg-white'></div>
        <p className=" leading-snug text-2xl text-left pl-4 text-gray-200">
          Pro members see their views and <br/> engagement increase by an average of{" "}
          <span className="font-bold block text-white">45% in their first month</span>
        </p>
      </div>
      <Button btnText="Start Free Trial" className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-full shadow-md"/>

    </div>
    </div>
  )
}
