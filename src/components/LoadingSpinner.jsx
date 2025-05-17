import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#121212] z-50">
      <div className="relative inline-flex mb-4">
        <div className="w-20 h-20 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] rounded-full animate-ping absolute opacity-75"></div>
        <div className="w-20 h-20 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] rounded-full animate-pulse"></div>
      </div>
      <p className="text-white text-xl font-semibold animate-pulse">
        Loading amazing content...
      </p>
    </div>
  );
};

export default LoadingSpinner;
