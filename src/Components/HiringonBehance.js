import { FaClipboardCheck, FaUsers, FaLock } from "react-icons/fa";
import Hire_Landing from '../images/hire-landing-how-1.webp'
import Button from "./Button";
const HiringonBehance = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10 mx-16">
      {/* Heading Section */}
      <div className="text-center">
        <h4 className="text-blue-500 font-semibold">How it works</h4>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Hiring on Behance is easy & secure.
        </h2>
      </div>

      {/* Steps Section */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
      {/* Step 1 */}
      <div className="border-2 border-blue-500 hover:border-blue-500 bg-white rounded-lg p-5 flex flex-col items-center text-center shadow-md flex-1">
        <div className="flex justify-center">
          <FaClipboardCheck className="text-blue-500 text-3xl mb-2" />
        </div>
        <h3 className="font-semibold text-gray-900">1. Review recommendations</h3>
        <p className="text-gray-600 text-sm mt-2">
          Share your requirements with recommended freelancers, and review their proposals.
        </p>
      </div>

      {/* Step 2 */}
      <div className="border-2 bg-white hover:border-blue-500 rounded-lg p-5 flex flex-col items-center text-center shadow-md flex-1">
        <div className="flex justify-center">
          <FaUsers className="text-blue-500 text-3xl mb-2" />
        </div>
        <h3 className="font-semibold text-gray-900">2. Hire & collaborate</h3>
        <p className="text-gray-600 text-sm mt-2">
          Start conversations, share files, and join video calls to discuss project details.
        </p>
      </div>

      {/* Step 3 */}
      <div className="border-2 bg-white hover:border-blue-500  rounded-lg p-5 flex flex-col items-center text-center shadow-md flex-1">
        <div className="flex justify-center">
          <FaLock className="text-blue-500 text-3xl mb-2" />
        </div>
        <h3 className="font-semibold text-gray-900">3. Pay securely on platform</h3>
        <p className="text-gray-600 text-sm mt-2">
          Pay seamlessly with a debit or credit card on Behance.
        </p>
      </div>
    </div>

      {/* Freelancer List Section */}
      <div className="mt-10 bg-white shadow-lg rounded-lg  w-full ">
        <img src={Hire_Landing}></img>
      </div>

      {/* Get Started Button */}
      <Button btnText="Get Started" className="mt-6 bg-blue-600 text-white px-6 py-2  font-semibold"/>
      
    </div>
  );
};

export default HiringonBehance;
