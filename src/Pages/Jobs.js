import { useState } from "react";
import JobSearch from "../Components/JobSearch";
import bg_img from '../images/bg-image.webp';
import codecraft from '../images/Codecraft.jpeg';
import tech from '../images/technical.jpeg';
import conzummate from '../images/conzummate_logo.jpeg';
import JobList from "../Components/JobList";
import JobSidebar from "../Components/JobSidebar";

const Jobs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      logo: conzummate,
      postedTime: "6 days ago",
      category: "Logo Design",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Frontend Developer",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: tech,
      postedTime: "3 days ago",
      category: "Website Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Full Stack Developer",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: codecraft,
      postedTime: "1 week ago",
      category: "UI/UX Design",
    },
    {
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "Branding Services",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: conzummate,
      postedTime: "6 days ago",
      category: "Branding Services",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Social Media Design",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: tech,
      postedTime: "3 days ago",
      category: "Social Media Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Website Design",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: codecraft,
      postedTime: "1 week ago",
      category: "Website Design",
    } ,{
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "llustrations",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: conzummate,
      postedTime: "6 days ago",
      category: "llustrations",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Packaging Design",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: tech,
      postedTime: "3 days ago",
      category: "Packaging Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Landing Page Design",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: codecraft,
      postedTime: "1 week ago",
      category: "Landing Page Design",
    },
    {
      companyName: "Conzummate Tech",
      location: "Lahore, Pakistan",
      jobTitle: "UI/UX Design",
      description: "Looking for a Senior Graphic and UI Designer to join our creative team.",
      logo: conzummate,
      postedTime: "6 days ago",
      category: "UI/UX Design",
    },
    {
      companyName: "Tech Innovations",
      location: "Karachi, Pakistan",
      jobTitle: "Architecture & Interior Design",
      description: "Seeking an experienced React.js developer for an exciting project.",
      logo: tech,
      postedTime: "3 days ago",
      category: "Architecture & Interior Design",
    },
    {
      companyName: "CodeCraft Solutions",
      location: "Islamabad, Pakistan",
      jobTitle: "Logo Design",
      description: "Hiring a full stack developer with expertise in React and Node.js.",
      logo: codecraft,
      postedTime: "1 week ago",
      category: "Logo Design",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = selectedCategory === "All" || job.category === selectedCategory;
    const matchesSearch =
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="">
      {/* Integrated Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh] flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold">Creative Jobs</h1>
        <p className="text-sm sm:text-lg">Browse and discover your next opportunity</p>
      </div>

      <div className="flex flex-col sm:flex-row">
        <button
          className="sm:hidden p-2 bg-blue-600 text-white rounded-full m-4"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "Hide Categories" : "Show Categories"}
        </button>

        <JobSidebar
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isSidebarOpen={isSidebarOpen}
        />

        <main className="w-full sm:w-3/4 p-4">
          <JobSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            jobCount={filteredJobs.length}
            selectedCategory={selectedCategory}
          />

          <JobList jobs={filteredJobs} />
        </main>
      </div>
    </div>
  );
};

export default Jobs;