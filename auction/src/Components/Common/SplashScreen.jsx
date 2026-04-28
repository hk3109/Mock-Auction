import { useEffect, useState } from "react";
import { IPLLogo } from "./Svgrender";

const SplashScreen = ({ onFinish, duration = 5000 }) => {
  const [fade, setFade] = useState(false);
  const fadeDuration = 800;

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(onFinish, fadeDuration);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeDuration, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Image */}
      <div className="relative text-center text-white">
        <IPLLogo />

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
          IPL Dashboard
        </h1>

        <p className="text-lg text-gray-300 mb-6">Loading live match data...</p>

        {/* Loader */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
