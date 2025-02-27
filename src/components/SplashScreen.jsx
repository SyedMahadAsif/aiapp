import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { billgates, elonmusk, levi, light } from "../assets/export";

const SplashScreen = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of images to rotate through
  const images = [billgates, elonmusk, levi, light];

  // Change the image every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change every 1000ms (1 second)

    return () => clearInterval(timer); // Cleanup the interval when the component unmounts
  }, []);

  // Trigger the animation after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationCompleted(true); // After delay, trigger the animation
    }, 1200); // Delay to simulate loading animation

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex justify-center items-center flex-col relative overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={images[currentImageIndex]}
          alt="Trending character"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Logo and Text */}
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <div
          className={`text-5xl font-extrabold text-white mb-4 transition-all duration-1000 ${
            animationCompleted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          MultiverseChat
        </div>

        {/* Description text */}
        <p
          className={`text-xl font-medium text-white mb-4 transition-all duration-1000 ${
            animationCompleted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Enter a world of endless conversations with your favorite characters.
        </p>

        {/* Start Now Button */}
        <Link
          to="/selectcharacter"
          className={`px-5 py-2 bg-blue-500 text-white text-md rounded-full shadow-lg hover:scale-105 transition-all duration-300 transform ${
            animationCompleted ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          Start Chatting
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
