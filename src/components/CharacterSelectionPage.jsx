import { Link } from "react-router-dom";
import { useState } from "react";
import { characters } from "./characters"; // Assuming you have an array of characters

const CharacterSelectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter characters based on selected category and search term
  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (character) =>
        selectedCategory === "All" || character.category === selectedCategory
    );

  const trendingCharacters = characters.slice(0, 5); // Get top 5 trending characters for the top section

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-gray-900 to-black text-white overflow-auto">
      {/* Main Content Wrapper */}
      <div className="w-full h-full lg:w-4/5 xl:w-3/4 mx-auto p-8 flex-1">
      <h3 className="text-2xl font-semibold text-white text-center mb-4">CelebHunt</h3>

       {/* Search Bar */}
       <div className="mb-2">
          <input
            type="text"
            placeholder="Search characters..."
            className="w-full p-4 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </div>

        {/* Trending Section */}
        <div className="mb-1">
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 ">Trending 🔥</h3>
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {trendingCharacters.map((character) => (
              <div
                key={character.id}
                className="relative w-14 h-14 lg:w-24 lg:h-24  rounded-full overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-110"
              >
                <Link to={`/chat/${character.id}`} className="block w-full h-full">
                  <img
                    src={character.profilePic}
                    alt={character.name}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <span className="text-white text-sm font-semibold">{character.name}</span>
                  </div> */}
                </Link>
              </div>
            ))}
          </div>
        </div>

       

        {/* Categories Section */}
        <div className="mb-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">Categories</h3>
          <div className="flex space-x-6 overflow-x-auto">
            {["All", "Developers", "Designers", "Anime"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category ? "bg-blue-600" : "bg-gray-800"
                } text-white hover:bg-blue-600 transition-all duration-300`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Characters Section */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-white mb-4">
            {selectedCategory === "All"
              ? "All Characters"
              : `${selectedCategory} Characters`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCharacters.map((character) => (
              <Link
                key={character.id}
                to={`/chat/${character.id}`}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={character.profilePic}
                  alt={character.name}
                  className="w-full h-64 object-cover rounded-xl mb-4 shadow"
                />
                <h3 className="text-xl font-semibold text-white text-center">
                  {character.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2 text-center">
                  {character.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center ">
          <p className="text-sm font-semibold text-white mb-8">Created by Mahad</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelectionPage;
