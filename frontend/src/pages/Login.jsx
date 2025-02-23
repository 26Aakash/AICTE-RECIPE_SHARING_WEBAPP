import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="p-8 w-full max-w-md text-center">
        {/* ✅ Stylish "Login" Title */}
        <h2 className="text-5xl font-bold text-orange-600 mb-6 tracking-wide drop-shadow-lg uppercase">
          Log<span className="text-orange-400">in</span>
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-orange-500 bg-transparent text-orange-600 placeholder-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-orange-500 bg-transparent text-orange-600 placeholder-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-transparent border border-orange-600 text-orange-600 py-2 rounded-md font-semibold hover:bg-orange-600 hover:text-white transition duration-300">
          Login
        </button>

        {/* Sign Up Link */}
        <p className="mt-4">
          <span className="text-orange-500">Don't have an account? </span>
          <Link to="/signup" className="text-orange-600 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

