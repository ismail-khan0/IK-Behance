import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialAuthButtons = () => {
  return (
    <div className="flex flex-col items-center gap-3 my-4">
      {/* Text */}
      <p className="text-gray-700 text-center">
        <strong className="text-black">
          <Link to="/auth"> Sign up </Link>
        </strong>{" "}
        or{" "}
        <strong className="text-black">
          <Link to="/auth"> Sign in </Link>
        </strong>{" "}
        to your account to view more work personalized to your preferences.
      </p>

      {/* Signup Button */}
     

      <span className="text-gray-500">or</span>

      {/* Social Login Buttons */}
      <div className="flex gap-3">
      <button
        onClick={() => (window.location.href = "https://mail.google.com/")}
        className="bg-blue-600 text-white font-medium px-4 py-1 rounded-full text-sm"
      >
        Sign Up With Email
      </button>
        <button
          onClick={() => (window.location.href = "https://www.apple.com/")}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <FaApple className="text-black text-xl" />
        </button>
        <button
          onClick={() => (window.location.href = "https://www.facebook.com/")}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <FaFacebook className="text-blue-600 text-xl" />
        </button>
        <button
          onClick={() =>
            (window.location.href = "https://ik-behance.vercel.app/")
          }
          className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
        >
          <FaGoogle className="text-red-500 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SocialAuthButtons;
