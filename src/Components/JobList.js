// Components/JobList.js
import JobCard from './JobCard';
import { useContext } from "react";
import { JobContext } from "../Context/JobContext";

const JobList = () => {
  const { filteredJobs, loading, error } = useContext(JobContext);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-0 lg:mt-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="max-w-sm border rounded-lg shadow-lg p-6 bg-white">
            <div className="animate-pulse">
              <div className="flex items-center gap-2 rounded-full">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="h-5 w-48 bg-gray-200 rounded mt-4"></div>
              <div className="h-3 w-full bg-gray-200 rounded mt-2"></div>
              <div className="h-3 w-3/4 bg-gray-200 rounded mt-2"></div>
              <div className="h-3 w-1/2 bg-gray-200 rounded mt-2"></div>
              <div className="h-3 w-20 bg-gray-200 rounded mt-4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-3 text-center py-10">
        <p className="text-red-500 font-semibold">{error}</p>
        <p className="text-gray-500 mt-2">Please try again later</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-0 lg:mt-6">
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            companyName={job.companyName}
            location={job.location}
            jobTitle={job.jobTitle}
            description={job.description}
            logo={job.logo}  // Intentionally misspelled to create an error
            postedTime={job.postedTime}
          />
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">No jobs available for this category.</p>
      )}
    </div>
  );
};

export default JobList;