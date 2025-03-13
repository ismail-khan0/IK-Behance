import { FaClipboardList, FaUserCheck, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const FreelanceProject = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 py-12 bg-gray-50 ">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Create your first freelance project
      </h2>
      <p className="text-gray-600 mt-3 max-w-2xl">
        Freelance projects are the most effective and fastest way to hire top creators matching your needs.
      </p>

      {/* Steps Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-6 w-full max-w-5xl">
        {/* Step 1 */}
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center flex-1">
          <FaClipboardList className="text-blue-500 text-4xl mb-3" />
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
            <span className="bg-blue-500 text-white rounded-full  px-2 mr-2">1</span>
            Create a brief
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Share your project requirements and preferences to tailor your search for the ideal candidate.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center flex-1">
          <FaUserCheck className="text-blue-500 text-4xl mb-3" />
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
            <span className="bg-blue-500 text-white rounded-full px-2  mr-2">2</span>
            Review candidates
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Browse through a curated list of professionals handpicked to meet your project’s unique demands.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center flex-1">
          <FaLock className="text-blue-500 text-4xl mb-3" />
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-800">
            <span className="bg-blue-500 text-white rounded-full px-2  mr-2">3</span>
            Hire & pay securely
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Finalize your collaboration and manage payments smoothly and securely, all within our platform.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition">
      <Link to="/auth"> Create a Freelance Project</Link> 
      </button>
    </div>
  );
};

export default FreelanceProject;
