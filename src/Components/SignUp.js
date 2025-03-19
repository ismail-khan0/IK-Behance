import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider"; // Import AuthContext

const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth(); // Get signUp function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(email, password); // Call signUp function
    navigate("/"); // Redirect to Home Page after successful sign-up
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Create an account
      </h2>

      <div className="text-center text-gray-500 my-2">Or</div>

      <form className="space-y-4" onSubmit={handleSignUp}>
        <div>
          <label className="block text-gray-600 text-left">Email address</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-600 text-left">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Continue
        </button>
      </form>

      <p className="text-center text-gray-600 mt-4">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/auth?form=login")}
          className="text-blue-600 hover:underline"
        >
          Sign in
        </button>
      </p>
    </div>
  );
};

export default SignUp;
