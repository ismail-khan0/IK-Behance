import react from "react";
import JobCard from './JobCard'
const JobList = ({ jobs }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-0 lg:mt-6">
        {jobs.length > 0 ? (
          jobs.map((job, index) => (
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
          <p className="col-span-3 text-center text-gray-500">No jobs available for this category.</p>
        )}
      </div>
    );
  };
  
  export default JobList;
  
