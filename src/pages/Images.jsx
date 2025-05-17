import React, { useContext, useState, useEffect, useRef } from "react";
import { ArrowDownToLine, X } from "lucide-react";
import Navbar from "../components/Navbar";
import { ImageDataContext } from "../context/ImageDataContext";

const ImageGallery = () => {
  const { imageArr, loading } = useContext(ImageDataContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Download handler
  const handleDownload = (url) => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    const link = document.createElement("a");
    link.href = url;
    link.download = "campus-image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-24 px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
          Image Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageArr !== undefined ? (
            imageArr.map((image, id) => (
              <ImageCard
                key={id}
                image={image}
                onClick={() => setSelectedImage(image)}
              />
            ))
          ) : (
            <div className="col-span-4 text-center py-12 text-gray-400">
              Loading images...
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r  bg-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up z-100 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Your image will be downloaded shortly!</span>
        </div>
      )}

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-transparent bg-opacity-20 backdrop-blur-md z-50 flex items-center justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#1e1e1e] bg-opacity-95 p-6 rounded-xl shadow-2xl max-w-4xl max-h-[90vh] flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full transition-colors duration-200"
              aria-label="Close"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Enlarged Image */}
            <img
              src={base(selectedImage)}
              alt="Campus Image"
              className="max-w-full max-h-[70vh] rounded-lg object-contain"
              referrerPolicy="no-referrer"
            />

            {/* Download Button */}
            <button
              onClick={() =>handleDownload(downloadImage(selectedImage))}
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

function base(url) {
  return `https://lh3.googleusercontent.com/d/${url}`;
}
function downloadImage(url) {
  console.log("downloadImage called with URL:", url);
  return `https://drive.usercontent.google.com/download?id=${url}&export=download&authuser=0&confirm=t`
}

const ImageCard = ({ image, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
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

  return (
    <div
      ref={imageRef}
      className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-xl group cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="w-full h-52 bg-gray-800 animate-pulse absolute z-10">
          <div className="w-full h-full bg-gradient-to-r from-gray-800 to-gray-700 animate-pulse"></div>
        </div>
      )}
      {isInView && (
        <img
          src={base(image)}
          referrerPolicy="no-referrer"
          loading="lazy"
          alt="Campus Image"
          className={`w-full aspect-square object-cover transition-all duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${isInView ? "scale-100" : "scale-95"}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 ${
          isHovering ? "opacity-50" : "opacity-0"
        }`}
      >
        <div className="p-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
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
            <path d="M11 5h2m-1-3v8m0 0-4-4m4 4 4-4"></path>
            <circle cx="12" cy="14" r="3"></circle>
            <path d="M9 18c.9.9 2 1.1 3 1.1s2.1-.2 3-1.1"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
