import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const JobPostingForm = ({ closeModal, categories, onJobAdded }) => {
  // Form state
  const [formData, setFormData] = useState({
    postingAs: "Company",
    companyName: "",
    companyUrl: "",
    jobTitle: "",
    description: "",
    jobType: "Full-time",
    category: "",
    location: "",
    logo: null
  });

  // UI state
  const [logoPreview, setLogoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Handle logo upload
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate image
    if (!file.type.match("image.*")) {
      setErrors(prev => ({ ...prev, logo: "Please upload an image file" }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setErrors(prev => ({ ...prev, logo: "Image must be less than 2MB" }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setLogoPreview(event.target.result);
      setFormData(prev => ({ ...prev, logo: event.target.result }));
      setErrors(prev => ({ ...prev, logo: "" }));
    };
    reader.readAsDataURL(file);
  };

  // Remove logo
  const removeLogo = () => {
    setLogoPreview(null);
    setFormData(prev => ({ ...prev, logo: null }));
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.jobTitle.trim()) newErrors.jobTitle = "Job title is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.logo) newErrors.logo = "Company logo is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    const jobData = {
      ...formData,
      postedTime: "Just now",
      id: Date.now() // Temporary ID
    };

    try {
      await onJobAdded(jobData);
      closeModal();
    } catch (error) {
      console.error("Error adding job:", error);
      setErrors(prev => ({ ...prev, form: "Failed to post job. Please try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clean up preview URL
  useEffect(() => {
    return () => {
      if (logoPreview) {
        URL.revokeObjectURL(logoPreview);
      }
    };
  }, [logoPreview]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Post a New Job</h2>
          <button 
            onClick={closeModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {errors.form && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded-lg">
            {errors.form}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Posting As Toggle */}
          <div className="flex space-x-4 justify-center items-center">
            {["Company", "Individual"].map((type) => (
              <button
                key={type}
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  formData.postingAs === type 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleChange({
                  target: { name: "postingAs", value: type }
                })}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Company Information */}
          {formData.postingAs === "Company" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-lg ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="etc Company"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
                )}
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Company Website
                </label>
                <input
                  type="url"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="https://example.com"
                />
              </div>
            </div>
          )}

          {/* Logo Upload */}
          <div>
            <label className="block font-medium text-gray-700 mb-1 text-left">
              Company Logo <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="logo-upload"
                />
                <label
                  htmlFor="logo-upload"
                  className="inline-block px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  Choose File
                </label>
              </div>
              {logoPreview ? (
                <div className="flex items-center gap-2">
                  <img
                    src={logoPreview}
                    alt="Logo preview"
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <span className="text-gray-500">No file chosen</span>
              )}
            </div>
            {errors.logo && (
              <p className="mt-1 text-sm text-red-500">{errors.logo}</p>
            )}
            
          </div>

          {/* Job Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className={`w-full p-2 border rounded-lg ${
                  errors.jobTitle ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Senior Designer"
              />
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-500">{errors.jobTitle}</p>
              )}
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg ${
                errors.category ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.label} value={cat.label}>
                  {cat.label}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-500">{errors.category}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Location <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={`w-full pl-10 p-2 border rounded-lg ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="e.g. Pakistan, NY or Remote"
              />
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-500">{errors.location}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Job Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg min-h-[120px] ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Describe the job responsibilities and requirements..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-500">{errors.description}</p>
            )}
          </div>

          {/* Form Actions */}
          <div className="gap-4 pt-4 flex justify-between">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 border border-gray-300 bg-gray-300  rounded-lg text-gray-700 hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 flex justify-between bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostingForm;