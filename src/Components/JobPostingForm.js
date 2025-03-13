import { useState } from "react";

const JobPostingForm = ({ closeModal, categories }) => {
  const [postingAs, setPostingAs] = useState("Company");
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobType, setJobType] = useState("Full-time");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = { postingAs, companyName, companyUrl, jobTitle, jobDescription, jobType, selectedCategory, location, logo };
    console.log("Job Posted:", jobData);
    alert("Job posted successfully!");
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 text-left">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full max-h-[70vh] overflow-y-auto text-left">
        <h2 className="text-xl font-bold text-center text-blue-600 mb-4">Post a New Job</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Posting as Toggle */}
          <div className="flex space-x-4 justify-center">
            {["Company", "Individual"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  postingAs === type ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setPostingAs(type);
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Company Fields */}
          {postingAs === "Company" && (
            <div>
              <label className="block font-medium text-gray-700">Company Name</label>
              <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-2 border rounded-lg text-gray-900" required />

              <label className="block font-medium mt-2 text-gray-700">Company URL</label>
              <input type="url" value={companyUrl} onChange={(e) => setCompanyUrl(e.target.value)}
                className="w-full p-2 border rounded-lg text-gray-900" required />

              <label className="block font-medium mt-2 text-gray-700">Upload Logo</label>
              <input type="file" onChange={(e) => setLogo(e.target.files[0])} className="w-full p-2 border rounded-lg text-gray-900" />
            </div>
          )}

          {/* Job Title */}
          <div>
            <label className="block font-medium text-gray-700">Job Title</label>
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-900" required />
          </div>

          {/* Job Description */}
          <div>
            <label className="block font-medium text-gray-700">Job Description</label>
            <textarea value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-900 min-h-[100px]" required></textarea>
          </div>

          {/* Job Category */}
          <div>
            <label className="block font-medium text-gray-700">Job Category</label>
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-900">
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.label} value={cat.label}>{cat.label}</option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700">Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-900" required />
          </div>

          {/* Job Type */}
          <div>
            <label className="block font-medium text-gray-700">Job Type</label>
            <select value={jobType} onChange={(e) => setJobType(e.target.value)}
              className="w-full p-2 border rounded-lg text-gray-900">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button type="button" onClick={closeModal}
              className="px-4 py-2 bg-gray-400 text-white rounded-lg">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Post Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm ;
