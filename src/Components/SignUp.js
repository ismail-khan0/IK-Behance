import React from "react";

const SignUp = ({ toggle }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Create an account
      </h2>

      <div className="flex justify-center gap-3 mb-4">
        <button className="p-2 bg-gray-200 rounded-full">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-1024.png" alt="Google" className="w-6" />
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <img src="https://cdn.iconscout.com/icon/free/png-512/free-facebook-logo-icon-download-in-svg-png-gif-file-formats--fb-social-media-pack-logos-icons-721949.png?f=webp&w=512" alt="Facebook" className="w-6" />
        </button>
      </div>

      <div className="text-center text-gray-500 my-2">Or</div>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-600 text-left">Email address</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-600 text-left">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Continue
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <button onClick={toggle} className="text-blue-600 hover:underline">
          Sign in
        </button>
      </p>
    </div>
  );
};

export default SignUp;
