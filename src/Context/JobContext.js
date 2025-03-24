import { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
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
    { label: "Stationery Design", section: "Graphic Design" },
    { label: "Fonts & Typography", section: "Graphic Design" },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const data = await response.json();
        console.log(data.products); // Log the fetched data
  
      // In the JobProvider.js
const fakeJobs = data.products.slice(0, 5).map((item, index) => ({
  id: item.id,
  companyName: ["Capregsoft", "Redstar", "Hixabyte", "Snipbyte"][index % 4],
  location: ["New York, USA", "London, UK", "Berlin, Germany", "Lahore, PK"][index % 4],
  jobTitle: item.title,
  description: item.description,
  logo: item.thumbnail || `https://picsum.photos/100/100?random=${index + 1}`, // Fixed template literal
  postedTime: `${index + 1} days ago`, // Also fixed this template literal
  category: categories[index % categories.length].label,
}));
  
        setJobs(fakeJobs);
        setFilteredJobs(fakeJobs);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch jobs. Please check your connection.");
        setLoading(false);
      }
    };
  
    fetchJobs();
  }, []);
  

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(jobs.filter((job) => job.category === selectedCategory));
    }
  }, [selectedCategory, jobs]);

  const addJob = (newJob) => {
    const jobToAdd = {
      ...newJob,
      id: jobs.length + 1,
      // Use the exact logo from the form (no fallbacks)
      logo: newJob.logo,
      // Ensure required fields
      companyName: newJob.companyName || "New Company",
      location: newJob.location || "Remote",
      category: newJob.category || "Website Design",
      postedTime: "Just now"
    };
  
    setJobs((prevJobs) => [...prevJobs, jobToAdd]);
    setFilteredJobs((prevFilteredJobs) => [...prevFilteredJobs, jobToAdd]);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        filteredJobs,
        loading,
        error,
        isSidebarOpen,
        setIsSidebarOpen,
        categories,
        selectedCategory,
        setSelectedCategory,
        addJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
