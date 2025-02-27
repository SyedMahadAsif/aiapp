import { Link } from "react-router-dom";
import { useState } from "react";
import { characters } from "./characters"; // Assuming you have an array of characters

const CharacterSelectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCharacters, setVisibleCharacters] = useState(5); // Start with 5 characters
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

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-800 to-black text-white overflow-auto ">
      {/* Fixed Header */}
      {/* <header className="w-full py-4 px-8 flex justify-center items-center">
        <h3 className="text-2xl font-bold text-white text-center">
          MultiverseChat
        </h3>
      </header> */}

      {/* Main Content */}
      <div className="w-full h-full lg:w-4/5 xl:w-3/4 mx-auto p-8 flex-1 ">
        <h3 className="text-2xl font-bold text-white text-left ">
          MultiverseChat
        </h3>
        <p className="text-left text-sm lg:text-lg mb-4">
          Talk to your favorite celebs, anime characters, and more.
        </p>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="🔍 Search characters..."
            className="w-full p-4 rounded-full bg-[#333333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* Trending Section */}
        <div className="mb-4 ">
          <h3 className="text-xl font-semibold text-white mb-4">Trending 🔥</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
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
                    className="w-full h-full object-cover rounded-full shadow-lg border-2 border-indigo-600"
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
            {["All", "Developers", "Designers", "Anime", "Entrepreneurs"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-blue-600"
                      : "bg-[#333333]"
                  } text-white hover:bg-blue-600 transition-all duration-300`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Chat Previews */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4 ">
            {selectedCategory === "All"
              ? "All Characters"
              : `${selectedCategory} Characters`}
          </h3>
          <div className="space-y-4">
            {currentCharacters.map((character) => (
              <Link
                key={character.id}
                to={`/chat/${character.id}`}
                className="flex items-center bg-[#222222] p-4 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
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
              className="px-6 py-3 bg-[#333333] text-white rounded-full hover:bg-blue-700 focus:outline-none transition-all duration-300"
            >
              Show More
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-8">
          <p className="text-sm font-semibold text-white">Created by Mahad</p>
          <p className="text-sm font-semibold text-white">⋆</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelectionPage;
