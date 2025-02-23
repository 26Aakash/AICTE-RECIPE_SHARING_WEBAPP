import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaGoogle, FaApple } from "react-icons/fa";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // Handle File Upload
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Handle Form Validation
  const validateForm = () => {
    let errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.email.includes("@")) errors.email = "Enter a valid email.";
    if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Sign Up Successful! 🎉");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="p-8 w-full max-w-md text-center bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-blur-md">
        <div className="flex justify-between items-center mb-6">
          {/* Sign Up Heading with Stylish Font */}
          <h2 className="text-5xl font-extrabold text-orange-600 tracking-wide drop-shadow-lg uppercase">
            Sign<span className="text-orange-400">Up</span>
          </h2>

          {/* Profile Upload Section */}
          <label className="cursor-pointer relative">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
              />
            ) : (
              <FaUserCircle className="text-orange-500 text-6xl" />
            )}
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Full Name */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-orange-500 bg-transparent text-orange-600 placeholder-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-orange-500 bg-transparent text-orange-600 placeholder-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-orange-500 bg-transparent text-orange-600 placeholder-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-orange-500 bg-transparent text-orange-600 placeholder-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-transparent border border-orange-600 text-orange-600 py-2 rounded-md font-semibold hover:bg-orange-600 hover:text-white transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Social Media Login */}
        <div className="mt-6">
          <p className="text-gray-500">Or sign up with</p>
          <div className="flex justify-center mt-3 space-x-4">
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition">
              <FaGoogle className="text-red-500 mr-2" /> Google
            </button>
            <button className="flex items-center px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow hover:bg-gray-100 transition">
              <FaApple className="text-black mr-2" /> Apple
            </button>
          </div>
        </div>

        {/* Already Have an Account? */}
        <p className="mt-4">
          <span className="text-orange-500">Already have an account? </span>
          <Link to="/login" className="text-orange-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
