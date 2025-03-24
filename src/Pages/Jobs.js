import React, { useContext } from "react";
import { JobContext, JobProvider } from "../Context/JobContext";
import JobSearch from "../Components/JobSearch";
import bg_img from '../images/jobBG.webp';
import JobList from "../Components/JobList";
import JobSidebar from "../Components/JobSidebar";
import Footer from "../Components/Footer";

const JobsContent = () => {
  const { 
    loading, 
    error, 
    isSidebarOpen, 
    setIsSidebarOpen 
  } = useContext(JobContext);

  return (
    <div>
      {/* Hero Section */}
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

        <JobSidebar />

        <main className="w-full sm:w-3/4 p-4">
          <JobSearch />

          {loading ? (
            <div className="text-center py-8">Loading jobs...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-8">{error}</div>
          ) : (
            <JobList />
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

const Jobs = () => (
  <JobProvider>
    <JobsContent />
  </JobProvider>
);

export default Jobs;
