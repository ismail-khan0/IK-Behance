import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider"; // Import AuthContext

const SignIn = () => {
  const navigate = useNavigate();
  const { signIn, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(email, password);
    navigate("/"); // Redirect to home page after sign-in
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {user ? `Welcome back, ${user.email}` : "Sign in"}
      </h2>
      <p className="text-sm text-gray-600">
        New user?{" "}
        <button
          onClick={() => navigate("/auth?form=signup")}
          className="text-blue-600 hover:underline"
        >
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="block text-gray-600 text-sm mb-1 text-left mt-2">
          Password
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3 hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SignIn;
