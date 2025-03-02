import { Link } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";


import { useState } from "react";
import { FaSearch, FaCompass, FaInfoCircle } from "react-icons/fa"; // Import specific icons from react-icons
import { characters } from "./characters"; // Assuming you have an array of characters

const CharacterSelectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCharacters, setVisibleCharacters] = useState(5); // Start with 5 characters
  const [isSearchVisible, setIsSearchVisible] = useState(false); // New state to track search visibility
  const charactersPerPage = 5; // Number of characters to show per click

  // Filter characters based on selected category and search term
  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (character) =>
        selectedCategory === "All" || character.category === selectedCategory
    );

  // Get the characters that are visible (based on the "Show More" button)
  const currentCharacters = filteredCharacters.slice(0, visibleCharacters);

  const trendingCharacters = characters.slice(0, 9); // Get top 5 trending characters for the top section

  const handleShowMore = () => {
    setVisibleCharacters(visibleCharacters + charactersPerPage); // Load 5 more characters
  };

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle the search bar visibility
  };

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#111111] text-white overflow-auto">
      <div
        className={`w-full h-full lg:w-[90%]  mx-auto p-8 flex-1 mb-16 ${
          isSearchVisible ? "pb-24" : ""
        }`}
      >
        <h3 className="text-2xl font-bold text-white text-left">
          MultiverseChat
        </h3>
        <p className="text-left text-sm lg:text-lg mb-4">
          Talk to your favorite celebs, anime characters, and more.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-4">Trending 🔥</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide     ">
            {trendingCharacters.map((character) => (
              <div
                key={character.id}
                className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-lg flex-shrink-0 snap-start"
              >
                <Link
                  to={`/chat/${character.id}`}
                  className="block w-full h-full"
                >
                  <img
                    src={character.profilePic}
                    alt={character.name}
                    className="w-full h-full object-cover rounded-full shadow-lg border-2 border-indigo-600   "
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

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
        </div>

        {/* Chat Previews */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4 ">
            {selectedCategory === "All"
              ? "All Characters"
              : `${selectedCategory}`}
          </h3>
          <div className="space-y-4">
            {currentCharacters.map((character) => (
              <Link
                key={character.id}
                to={`/chat/${character.id}`}
                className="flex items-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 text-white px-5 py-3  hover:bg-gray-900 transition-colors"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={character.profilePic}
                    alt={character.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {character.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {character.description || "Click to chat!"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        {filteredCharacters.length > visibleCharacters && (
          <div className="flex justify-center mb-4">
            <button
              onClick={handleShowMore}
              className="px-6 py-3  text-white  focus:outline-none  duration-300    bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700  flex items-center hover:bg-gray-900 transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] flex justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-3 rounded-2xl shadow-lg">
  {/* Explore Button with Text */}
  <Link
    to="/explore"
    className="flex justify-center items-center space-x-2 w-24 h-12 bg-gray-700 rounded-xl transition-all hover:bg-gray-600"
  >
    <MdOutlineExplore className="w-6 h-6 text-white" />
    <span className="text-white text-sm">Explore</span>
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

export default CharacterSelectionPage;
