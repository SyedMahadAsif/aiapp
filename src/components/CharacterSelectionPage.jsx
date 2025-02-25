import { Link } from "react-router-dom";
import { useState } from "react";
import { characters } from "./characters"; // Assuming you've updated your characters with categories

const CharacterSelectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter characters based on selected category
  const filteredCharacters =
    selectedCategory === "All"
      ? characters
      : characters.filter(
          (character) => character.category === selectedCategory
        );

  return (
    <div className="flex h-screen bg-gradient-to-r from-gray-900 to-black text-white overflow-auto justify-center items-center">
      {/* Main Content Wrapper */}
      <div className="w-full h-full lg:w-4/5 xl:w-3/4 p-8">
        <h2 className="text-3xl font-bold text-white mb-8 text-left">
          Explore Characters
        </h2>

        {/* Categories Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4 text-left">
            Categories
          </h3>
          <div className="flex justify-start space-x-6 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === "All" ? "bg-blue-600" : "bg-gray-800"
              } text-white hover:bg-blue-600 transition-all duration-300`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory("Developers")}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === "Developers"
                  ? "bg-blue-600"
                  : "bg-gray-800"
              } text-white hover:bg-blue-600 transition-all duration-300`}
            >
              Developers
            </button>
            <button
              onClick={() => setSelectedCategory("Designers")}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === "Designers" ? "bg-blue-600" : "bg-gray-800"
              } text-white hover:bg-blue-600 transition-all duration-300`}
            >
              Designers
            </button>
            <button
              onClick={() => setSelectedCategory("Anime")}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === "Anime"
                  ? "bg-blue-600"
                  : "bg-gray-800"
              } text-white hover:bg-gray-700 transition-all duration-300`}
            >
              Anime
            </button>
          </div>
        </div>

        {/* Featured Characters Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4 text-left">
            {selectedCategory === "All"
              ? "All Characters"
              : `${selectedCategory} Characters`}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredCharacters.map((character) => (
              <Link
                key={character.id}
                to={`/chat/${character.id}`}
                className="flex flex-col items-center bg-gray-800 p-1 rounded-xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={character.profilePic}
                  alt={character.name}
                  className="w-full h-64 object-cover rounded-xl mb-4 shadow"
                />
                <h3 className="text-xl font-semibold text-white  text-center">
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
        <div className="text-center mt-12">
          <p className="text-sm font-semibold text-white mb-4">
            Created by Mahad
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelectionPage;
