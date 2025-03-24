// Components/JobCard.js
import { FaMapMarkerAlt } from "react-icons/fa";

const JobCard = ({ 
  companyName, 
  location, 
  jobTitle, 
  description, 
  logo, 
  postedTime 
}) => {
  return (
    <div className="max-w-sm border rounded-lg shadow-lg p-6 bg-white hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-2 rounded-full">
        <img
          src={logo} 
          alt={`${companyName} Logo`}
          className="w-10 h-10 border flex justify-center items-center  rounded-full"
        />
        <div>
          <h2 className="font-semibold text-lg">{companyName}</h2>
          <p className="text-gray-600 flex items-center text-sm">
            <FaMapMarkerAlt className="mr-1 text-gray-500" /> {location}
          </p>
        </div>
      </div>
      <h3 className="font-bold text-lg mt-4 text-left">{jobTitle}</h3>
      <p className="text-gray-700 mt-2 text-sm text-left line-clamp-3">
        {description}
      </p>
      <p className="text-gray-500 text-xs mt-4 text-left">{postedTime}</p>
    </div>
  );
};

export default JobCard;