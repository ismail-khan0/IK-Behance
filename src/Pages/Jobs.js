import { useState } from "react";
import JobCard from "../Components/JobCard";
import bg_img from "../images/bg-image.webp";
import Input from "../Components/Input";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility on small screens

  const categories = [
    { label: "All", section: "All" },
    { label: "Logo Design", section: "Popular" },
    { label: "Branding Services", section: "Popular" },
    { label: "Social Media Design", section: "Popular" },
    { label: "Website Design", section: "Popular" },
    { label: "Illustrations", section: "Popular" },
    { label: "Packaging Design", section: "Popular" },
    { label: "Landing Page Design", section: "Popular" },
    { label: "UI/UX Design", section: "Popular" },
    { label: "Architecture & Interior Design", section: "Popular" },
    { label: "Logo Design", section: "Graphic Design" },
    { label: "Stationery Design", section: "Graphic Design" },
    { label: "Fonts & Typography", section: "Graphic Design" },
    { label: "Branding Services", section: "Graphic Design" },
  ];

  const jobs = [
    {
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "Graphic and UI Designer",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: "/logo.png",
      postedTime: "6 days ago",
      category: "Logo Design",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Frontend Developer",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: "/tech-logo.png",
      postedTime: "3 days ago",
      category: "Website Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Full Stack Developer",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: "/codecraft-logo.png",
      postedTime: "1 week ago",
      category: "UI/UX Design",
    },
    {
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "Branding Services",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: "/logo.png",
      postedTime: "6 days ago",
      category: "Branding Services",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Social Media Design",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: "/tech-logo.png",
      postedTime: "3 days ago",
      category: "Social Media Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Website Design",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: "/codecraft-logo.png",
      postedTime: "1 week ago",
      category: "Website Design",
    } ,{
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "llustrations",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: "/logo.png",
      postedTime: "6 days ago",
      category: "llustrations",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Packaging Design",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: "/tech-logo.png",
      postedTime: "3 days ago",
      category: "Packaging Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Landing Page Design",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: "/codecraft-logo.png",
      postedTime: "1 week ago",
      category: "Landing Page Design",
    },
    {
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "UI/UX Design",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: "/logo.png",
      postedTime: "6 days ago",
      category: "UI/UX Design",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Architecture & Interior Design",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: "/tech-logo.png",
      postedTime: "3 days ago",
      category: "Architecture & Interior Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Logo Design",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: "/codecraft-logo.png",
      postedTime: "1 week ago",
      category: "Logo Design",
    },
  ];


  // Filter jobs based on the selected category
  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="">
      {/* Upper section with background image and title */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold">Creative Jobs</h1>
        <p className="text-sm sm:text-lg">Browse and discover your next opportunity</p>
      </div>

      {/* Main content */}
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar toggle button for small screens */}
        <button
          className="sm:hidden p-2 bg-blue-600 text-white rounded-md m-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Categories" : "Show Categories"}
        </button>

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } sm:block w-full sm:w-72 p-4 border-r`}
        >
          <button className="bg-blue-600 text-white w-full py-2 rounded-full flex items-center justify-center font-semibold text-lg">
            <span className="mr-2 text-xl">+</span> New Job
          </button>

          <div className="mt-6">
            <h2 className="font-bold text-lg text-left">Categories</h2>
            <ul className="mt-2 space-y-2 text-left">
              {["All", "Popular", "Graphic Design"].map((section) => (
                <div key={section}>
                  {section !== "All" && (
                    <h3 className="text-sm text-gray-500 mt-4 uppercase">
                      {section}
                    </h3>
                  )}
                  {categories
                    .filter((cat) => cat.section === section)
                    .map((cat) => (
                      <li key={cat.label} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="category"
                          id={cat.label}
                          value={cat.label}
                          checked={selectedCategory === cat.label}
                          onChange={() => setSelectedCategory(cat.label)}
                          className="accent-blue-600"
                        />
                        <label htmlFor={cat.label} className="cursor-pointer">
                          {cat.label}
                        </label>
                      </li>
                    ))}
                </div>
              ))}
            </ul>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="w-full sm:w-3/4 p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h1 className="text-xl font-bold mb-2 sm:mb-0">
              {selectedCategory} Jobs ({filteredJobs.length})
            </h1>
            <Input
              placeholder="Search Full-Time Jobs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-auto py-2"
            />
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <JobCard
                  key={index}
                  companyName={job.companyName}
                  location={job.location}
                  jobTitle={job.jobTitle}
                  description={job.description}
                  logo={job.logo}
                  postedTime={job.postedTime}
                />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">
                No jobs available for this category.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Jobs;