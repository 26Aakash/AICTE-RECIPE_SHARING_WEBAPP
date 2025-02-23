import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaComment, FaShare } from "react-icons/fa";

const RecipeCard = ({ recipe, index }) => {
  // Random initial likes and shares
  const [likes, setLikes] = useState(Math.floor(Math.random() * 500) + 50);
  const [shares, setShares] = useState(Math.floor(Math.random() * 200) + 20);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  // Background color alternates every card
  const bgColor = index % 2 === 0 ? "bg-[#E6F4EA]" : "bg-[#FDE8E9]"; // Light Green & Light Red

  return (
    <div className={`shadow-md rounded-lg overflow-hidden relative transition transform hover:scale-105 duration-300 p-4 ${bgColor}`}>
      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Recipe Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
        <p className="text-gray-600 text-sm">{recipe.category}</p>

        {/* ❤️ Like, 💬 Comment & 🔄 Share Section */}
        <div className="flex items-center justify-between mt-3">
          {/* Like Button */}
          <button onClick={handleLike} className="flex items-center space-x-1">
            {liked ? (
              <FaHeart className="text-red-500 text-xl" />
            ) : (
              <FaRegHeart className="text-gray-500 text-xl hover:text-red-500 transition" />
            )}
            <span className="text-gray-700 text-sm">{likes}</span>
          </button>

          {/* Comment Button */}
          <button className="flex items-center space-x-1 text-gray-600 text-xl hover:text-gray-800 transition">
            <FaComment />
            <span className="text-sm">Comment</span>
          </button>

          {/* Share Button */}
          <button className="flex items-center space-x-1 text-gray-600 text-xl hover:text-blue-500 transition">
            <FaShare />
            <span className="text-sm">{shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
