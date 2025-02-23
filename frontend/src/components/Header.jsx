import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUserCircle, FaPlusCircle } from "react-icons/fa";

const Header = () => {
  // Simulated user login state (Replace with actual authentication logic)
  const user = JSON.parse(localStorage.getItem("user")); // Example: Fetch user from localStorage or Context API

  return (
    <header
      className="relative bg-white shadow-md flex items-center justify-center px-6 py-4 transition-all duration-300 hover:backdrop-blur-md"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "240px",
      }}
    >
      {/* Search Bar Positioned at Bottom Center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center bg-white shadow-lg rounded-full px-4 py-2 w-2/3 sm:w-1/2 md:w-1/3 z-10">
        <input
          type="text"
          placeholder="Search Recipes"
          className="w-full bg-transparent outline-none text-gray-700"
        />
        <FaSearch className="text-gray-500 cursor-pointer" />
      </div>

      {/* Right Side - Profile & Add Recipe (If Logged In) or Auth Buttons */}
      <div className="absolute bottom-6 right-6 flex items-center space-x-6 z-10">
        {user ? (
          <>
            {/* Add Recipe Icon with Label */}
            <Link to="/add-recipe" className="flex flex-col items-center text-center">
              <FaPlusCircle className="text-green-600 text-3xl cursor-pointer hover:text-green-800 transition duration-200" />
              <span className="text-sm text-gray-700">ADD RECIPE</span>
            </Link>

            {/* Profile Icon */}
            <FaUserCircle className="text-gray-700 text-3xl cursor-pointer hover:text-pink-600 transition duration-200" />
          </>
        ) : (
          // Show Login & Signup Buttons if Not Logged In
          <>
            <Link
              to="/signup"
              className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white transition"
            >
              SIGN UP
            </Link>
            <Link
              to="/login"
              className="bg-white text-pink-600 border border-pink-600 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white transition"
            >
              LOGIN
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;











// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

// const Header = () => {
//   return (
//     <header className="relative flex items-center justify-center px-6 py-4">
//       {/* Background Image with Hover Blur Effect */}
//       <div className="absolute inset-0 bg-cover bg-center transition duration-300 ease-in-out before:absolute before:inset-0 before:bg-black/20 hover:before:backdrop-blur-md"
//         style={{
//           backgroundImage: `url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
//           height: "240px",
//         }}
//       ></div>

//       {/* Search Bar Positioned at Bottom Center */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-2/3 sm:w-1/2 md:w-1/3 bg-white shadow-lg rounded-full flex items-center px-4 py-2 z-10">
//         <input
//           type="text"
//           placeholder="Search Recipes"
//           className="w-full bg-transparent outline-none text-gray-700"
//         />
//         <FaSearch className="text-gray-500" />
//       </div>

//       {/* Auth Buttons Positioned at Bottom Right (Same Level as Search Bar) */}
//       <div className="absolute bottom-6 right-6 flex space-x-4 z-10">
//         <Link
//           to="/signup"
//           className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white transition"
//         >
//           SIGN UP
//         </Link>
//         <Link
//           to="/login"
//           className="bg-white text-pink-600 border border-pink-600 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white transition"
//         >
//           LOGIN
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;




