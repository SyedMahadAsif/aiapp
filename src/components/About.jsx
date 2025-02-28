import React from "react";
import { Link } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      <div className="w-full max-w-4xl mx-auto p-8 flex-1">
        <h1 className="text-4xl font-semibold text-white mb-6">
          About This WebApp
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          Welcome to the MultiverseChat! This platform allows you to chat with
          your favorite celebrities, anime characters, and AI-generated personas
          from a variety of categories. Whether you're looking to chat with a
          developer, designer, anime character, or an entrepreneur, you’ll find
          them all in one place.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">What is it?</h3>
        <p className="text-lg text-gray-400 mb-6">
          This app lets users engage in dynamic, interactive conversations with
          a wide range of characters. The web app is designed to offer a unique
          experience by allowing users to chat with popular characters, ranging
          from well-known celebrities to AI-generated personalities. You can
          explore different categories, from developers and designers to anime
          characters and entrepreneurs.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Features</h3>
        <ul className="list-disc pl-6 text-lg text-gray-400 mb-6">
          <li>
            Search and chat with a variety of characters, including celebrities,
            anime characters, and more.
          </li>
          <li>
            Filter characters by categories like Developers, Designers, Anime,
            Entrepreneurs, etc.
          </li>
          <li>
            Interact with AI-generated characters that respond based on their
            category and background.
          </li>
          <li>
            Responsive design ensures a seamless experience on both mobile and
            desktop devices.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mb-4">How It Works</h3>
        <p className="text-lg text-gray-400 mb-6">
          The app allows you to browse through a collection of characters from
          different categories. You can select a category that interests you,
          search for a specific character, or simply explore random profiles.
          Each character has a profile with their name, picture, and a brief
          description, and you can then start a conversation with them. The
          experience is interactive, and each character responds based on their
          unique background and persona.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">Built With</h3>
        <p className="text-lg text-gray-400 mb-6">
          This app was built using modern web technologies such as React, React
          Router, and Tailwind CSS for styling. It’s designed for performance
          and an intuitive user experience, providing a fast, responsive
          interface across devices.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-4">
          Who Developed This?
        </h3>
        <p className="text-lg text-gray-400 mb-6">
          This web app was created by <strong>Mahad</strong>, a passionate
          developer with a love for building interactive experiences. If you
          have any questions or suggestions, feel free to reach out—Mahad would
          love to hear from you!
        </p>

        <div className="mt-6">
          <Link
            to="/explore"
            className="text-lg font-semibold text-blue-600 hover:text-blue-500 transition-all duration-300"
          >
            Start Exploring
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      {/* <div className="fixed bottom-0 w-full p-4 flex justify-around items-center backdrop-blur-md text-white">
        <Link
          to="/selectcharacter"
          className="flex flex-col items-center hover:text-blue-600 transition-all duration-300"
        >
          <RiHome2Line className="w-6 h-6" />
        </Link>
      </div> */}

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-4 text-center text-gray-400">
        <p>&copy; 2025 MultiverseChat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
