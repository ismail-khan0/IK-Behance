import React from "react";

const SignIn = ({ toggle }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">Sign in</h2>
      <p className="text-sm text-gray-600">
        New user?{" "}
        <button onClick={toggle} className="text-blue-600 hover:underline">
          Create an account
        </button>
      </p>

      <div className="mt-4">
        <label className="block text-gray-600 text-sm mb-1 text-left">
          Email address
        </label>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Enter your email"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700">
          Continue
        </button>
      </div>

      <div className="flex items-center my-4">
        <div className="w-full h-px bg-gray-300"></div>
        <span className="mx-2 text-gray-500 text-sm">Or</span>
        <div className="w-full h-px bg-gray-300"></div>
      </div>

      <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100">
        <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-1024.png" alt="Google" className="w-5 mr-2" />
        Continue with Google
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        <a href="#" className="text-blue-600 hover:underline">
          Get help signing in
        </a>
      </p>
    </div>
  );
};

export default SignIn;
