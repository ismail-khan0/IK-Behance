import { useState } from "react";
import { X, Check } from "lucide-react";
import bg from "../images/MoodBoard.png";

const ShareProjectModal = ({ isOpen, setIsOpen }) => {
  const [copied, setCopied] = useState(false); // Track if link was copied

  const projectUrl = "https://ik-behance.vercel.app/"; // Change this to your actual project URL

  const handleCopy = () => {
    navigator.clipboard.writeText(projectUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 sec
    });
  };

  if (!isOpen) return null; // Prevents rendering when modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
        <button className="absolute top-3 right-3" onClick={() => setIsOpen(false)}>
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <h2 className="text-lg font-bold text-center mb-2">Share Project</h2>
        <p className="text-center text-gray-600 mb-4">Copy and share your project link.</p>
        <div className="w-full h-40 bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
          <img src={bg} alt="Project Preview" className="rounded-xl object-cover w-full h-full" />
        </div>
        <button
          className="w-full bg-gray-200 text-black flex items-center justify-center gap-2 py-2 rounded-md"
          onClick={handleCopy}
        >
          {copied ? <Check className="w-5 h-5 text-green-500" /> : "🔗"} Copy Link
        </button>
      </div>
    </div>
  );
};

export default ShareProjectModal;
