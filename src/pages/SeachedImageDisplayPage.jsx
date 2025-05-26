import React, { useContext, useState, useEffect, useRef } from "react";
import { ArrowDownToLine, X } from "lucide-react";
import Navbar from "../components/Navbar";
import { SearchImageDataContext } from "../context/SearchImageDataContext";

const SearchedImageDisplayPage = () => {
  const { searchResults } = useContext(SearchImageDataContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
  console.log("Search Results:", selectedImage);
  const base = (url) => {
    return `https://lh3.googleusercontent.com/d/${url}`;
  };

  const handleDownload = (url) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    window.open(
      `https://drive.usercontent.google.com/download?id=${url}&export=download&authuser=0&confirm=t`
    );
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-24 px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
          Search Results
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.map((imageId, index) => (
            <LazyImage
              key={index}
              imageId={imageId}
              onClick={() => setSelectedImage(imageId)}
            />
          ))}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up">
          <span>Your image will be downloaded shortly!</span>
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-[#1e1e1e] p-6 rounded-xl shadow-2xl max-w-4xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60"
            >
              <X size={24} />
            </button>

            <img
              src={base(selectedImage)}
              alt="Selected"
              className="max-w-full max-h-[70vh] rounded-lg object-contain"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={() => handleDownload(selectedImage)}
              className="mt-6 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white py-2 px-6 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <ArrowDownToLine size={20} />
              Download
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const LazyImage = ({ imageId, onClick }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const base = (url) => {
    return `https://lh3.googleusercontent.com/d/${url}`;
  };

  return (
    <div
      ref={imageRef}
      className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-xl cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="w-full aspect-square bg-gray-800 animate-pulse absolute z-10">
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse"></div>
        </div>
      )}

      {isInView && (
        <img
          src={base(imageId)}
          alt="Search Result"
          className={`w-full aspect-square object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-50 transition-opacity duration-300">
        <div className="p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchedImageDisplayPage;
