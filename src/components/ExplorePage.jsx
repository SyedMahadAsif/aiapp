import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { characters } from "./characters"; // Assuming you have an array of characters
import { RiHome2Line } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State to control search visibility

  // Filter characters based on search term and selected category
  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (character) =>
        selectedCategory === "All" || character.category === selectedCategory
    );

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search visibility
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#111111] text-white overflow-auto">
      {/* Main Content */}
      <div
        className={`w-full h-full mx-auto lg:w-[90%] p-8 flex-1 mb-16 ${
          isSearchVisible ? "pb-32" : "pb-16" // Adjust padding when search bar is visible
        }`}
      >
        <h3 className="text-2xl font-bold text-white text-left">Explore</h3>
        <p className="text-left text-sm lg:text-lg mb-4">
          Discover characters from various worlds.
        </p>

        {/* Categories Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
          <div className="flex space-x-2 overflow-x-auto">
            {["All", "Anime", "Entrepreneurs"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white" // Active category background
                    : "bg-[#333333] text-gray-300" // Non-active category background
                }  bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mt-4">
            {selectedCategory === "All"
              ? "All Characters"
              : `${selectedCategory}`}
          </h3>
        </div>

        {/* Display Filtered Characters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-6">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <div
                key={character.id}
                className="group relative overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl border border-gray-700 hover:bg-gray-900 duration-300"
              >
                <Link
                  to={`/chat/${character.id}`} // Link to the chat page with the character's id
                  className="relative"
                >
                  <img
                    src={character.profilePic}
                    alt={character.name}
                    className="w-full h-40 lg:h-60 object-cover rounded-t-2xl"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity"></div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold">{character.name}</h3>
                    <p className="text-sm text-gray-300 none hidden lg:block">
                      {character.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-xl text-gray-400">
              No characters found.
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-3 rounded-2xl shadow-lg">
  {/* Explore Button with Text */}
  <Link
    to="/selectcharacter"
    className="flex justify-center items-center space-x-2 w-24 h-12 bg-gray-700 rounded-xl transition-all hover:bg-gray-600"
  >
    <RiHome2Line className="w-6 h-6 text-white" />
    <span className="text-white text-sm">Home</span>
  </Link>

  {/* Center Search Button */}
  <button
    onClick={handleSearchClick}
    className="flex justify-center items-center w-16 h-16 bg-gray-700 rounded-full shadow-xl transition-all hover:bg-gray-600"
  >
    <IoSearchOutline className="w-7 h-7 text-white" />
    
  </button>

  {/* About Button with Text */}
  <Link
    to="/about"
    className="flex justify-center items-center space-x-2 w-24 h-12 bg-gray-700 rounded-xl transition-all hover:bg-gray-600"
  >
    <IoIosInformationCircleOutline className="w-6 h-6 text-white" />
    <span className="text-white text-sm">About</span>
  </Link>
</div>

      {/* Search Bar at the Bottom */}
      {isSearchVisible && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-md p-4">
          <input
            type="text"
            placeholder="🔍 Search characters..."
            className="w-full p-4 rounded-2xl bg-gray-800 bg-opacity-50 backdrop-blur-lg p-3 mb-1 rounded-2xl shadow-lg backdrop-blur-lg bg-gray-800  text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
