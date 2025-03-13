import { useState } from "react";

const JobPostingForm = () => {
  const [postingAs, setPostingAs] = useState("Company");
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobType, setJobType] = useState("Full-time");
  const [categories, setCategories] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = { postingAs, companyName, companyUrl, jobTitle, jobDescription, jobType, categories, location, logo };
    console.log("Job Posted:", jobData);
    alert("Job posted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8 rounded-2xl shadow-xl text-white mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Post a Full-Time Job</h2>
      <div className="border-l-4 border-yellow-300 pl-4 mb-4">
        <p className="font-medium">1. Are you posting for a company, or as an individual?</p>
      </div>
      <div className="flex space-x-4 mb-6 justify-center">
        <button
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${postingAs === "Company" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-900"}`}
          onClick={() => setPostingAs("Company")}
        >
          Company
        </button>
        <button
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${postingAs === "Individual" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-900"}`}
          onClick={() => setPostingAs("Individual")}
        >
          Individual
        </button>
      </div>
      {postingAs === "Company" && (
        <div className="mb-6 text-left">
          <label className="block font-medium text-left">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-3 border rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label className="block font-medium mt-3">Company URL</label>
          <input
            type="url"
            value={companyUrl}
            onChange={(e) => setCompanyUrl(e.target.value)}
            className="w-full p-3 border rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="mt-4">
            <label className="block font-medium">Upload Logo</label>
            <input type="file" onChange={(e) => setLogo(e.target.files[0])} className="w-full p-2 border rounded-full text-gray-900" />
          </div>
        </div>
      )}
      <div className="border-l-4 border-yellow-300 pl-4 mb-4">
        <p className="font-medium">2. Job Details</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Job Title</label>
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="w-full p-3 border rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-3 border rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div>
          <label className="block font-medium">Categories</label>
          <input
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            className="w-full p-3 border rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 border rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Job Type</label>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="w-full p-3 border rounded-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold hover:bg-gray-300 transition"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default JobPostingForm;
