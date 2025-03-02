import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMagic, FaStar, FaUserFriends, FaPaintBrush, FaRocket } from "react-icons/fa";

const SplashScreen = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-[#111111] text-white flex flex-col items-center justify-center px-4">
      {/* Glowing Logo */}
      <div className="text-white text-5xl sm:text-7xl animate-pulse mb-4">
        <FaMagic className="drop-shadow-lg" />
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
        MultiverseChat+
      </h1>
      <p className="text-gray-400 mt-2 text-sm sm:text-md text-center">
        Exclusive, experimental, and pre-release features
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-3xl">
        <FeatureCard
          icon={<FaPaintBrush />}
          title="Custom Themes"
          description="Personalize your chat with unique themes"
        />
        <FeatureCard
          icon={<FaStar />}
          title="VIP Badge"
          description="Get a premium badge on your profile"
        />
        <FeatureCard
          icon={<FaUserFriends />}
          title="Best Friend Pin"
          description="Keep your top conversation at the top"
        />
        <FeatureCard
          icon={<FaRocket />}
          title="Early Access"
          description="Be the first to test new AI features"
        />
        
      </div>

      {/* CTA Button */}
      <Link
        to="/selectcharacter"
        className="mt-6 px-5 py-3 text-white bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 text-white px-5 py-3  hover:bg-gray-900 transition-colors w-full sm:w-auto text-center"
      >
        Start Chatting
      </Link>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 text-white px-5 py-3  hover:bg-gray-900 transition-colors">
    <div className="text-white text-2xl sm:text-3xl">{icon}</div>
    <div className="ml-3">
      <h3 className="text-white font-semibold text-sm sm:text-base">{title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
    </div>
  </div>
);

export default SplashScreen;
