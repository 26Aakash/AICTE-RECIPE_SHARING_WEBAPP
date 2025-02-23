import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-4 text-center">
      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 font-semibold text-gray-900 mb-4">
        <a href="#" className="hover:text-orange-500 transition">Explore</a>
        <a href="#" className="hover:text-orange-500 transition">What</a>
        <a href="#" className="hover:text-orange-500 transition">Help & Feedback</a>
        <a href="#" className="hover:text-orange-500 transition">Contact</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
          <FaTwitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 transition">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-gray-500 text-sm">
        2019 Company. All rights and copyrights reserved.
      </p>
    </footer>
  );
};

export default Footer;
