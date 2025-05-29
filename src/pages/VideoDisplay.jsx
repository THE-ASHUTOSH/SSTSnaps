import React, { useContext, useState, useEffect, useRef } from "react";
import { ArrowDownToLine, X } from "lucide-react";
import Navbar from "../components/Navbar";
import { VideoDataContext } from "../context/VideoDataContext";

const ImageGallery = () => {
  const { videoArr, loading } = useContext(VideoDataContext);
  const [selectedVideo, setselectedVideo] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);45676777

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update navbar z-index when modal opens/closes
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (selectedVideo) {
      // Lower navbar z-index when modal is open
      if (navbar) navbar.style.zIndex = "10";
    } else {
      // Restore navbar z-index when modal is closed
      if (navbar) navbar.style.zIndex = "";
    }

    // Cleanup on unmount
    return () => {
      if (navbar) navbar.style.zIndex = "";
    };
  }, [selectedVideo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedVideo || !videoArr) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigatePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateNext();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setselectedVideo(null);
      }
    };

    if (selectedVideo) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedVideo, selectedIndex, videoArr]);

  const navigatePrevious = () => {
    if (!videoArr || videoArr.length === 0) return;
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 1 : videoArr.length - 1;
    setSelectedIndex(newIndex);
    setselectedVideo(videoArr[newIndex]);
  };

  const navigateNext = () => {
    if (!videoArr || videoArr.length === 0) return;
    const newIndex =
      selectedIndex < videoArr.length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
    setselectedVideo(videoArr[newIndex]);
  };

  const openModal = (video, index) => {
    setselectedVideo(video);
    setSelectedIndex(index);
  };

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
          Video Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {videoArr !== undefined ? (
            videoArr.map((image, id) => (
              <VideoCard
                key={id}
                image={image}
                onClick={() => openModal(image, id)}
              />
            ))
          ) : (
            <div className="col-span-4 text-center py-12 text-gray-400">
              Loading Videos...
            </div>
          )}
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r bg-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up z-[60] flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>Your video will be downloaded shortly!</span>
        </div>
      )}

      {/* Modal Overlay */}
      {selectedVideo && (
        <div
          onClick={() => setselectedVideo(null)}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-50 flex items-center justify-center"
        >
          {/* Navigation Arrows */}
          {videoArr && videoArr.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePrevious();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 z-60"
                aria-label="Previous video"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 z-60"
                aria-label="Next video"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#1e1e1e] bg-opacity-95 p-6 rounded-xl shadow-2xl max-w-4xl max-h-[90vh] flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setselectedVideo(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-40 hover:bg-opacity-60 p-2 rounded-full transition-colors duration-200"
              aria-label="Close"
            >
              <X className="text-white" size={24} />
            </button>

            {/* Video Counter */}
            {videoArr && videoArr.length > 1 && (
              <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {selectedIndex + 1} / {videoArr.length}
              </div>
            )}

            {/* Enlarged Video */}
            <video
              controls={true}
              src={playVid(selectedVideo)}
              alt="Campus Video"
              className="w-full h-[600px] rounded-lg object-contain m-3"
              referrerPolicy="no-referrer"
              allow="autoplay"
            />

            {/* Download Button */}
            <button
              onClick={() => handleDownload(downloadImage(selectedVideo))}
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
function playVid(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}
function downloadImage(url) {
  console.log("downloadImage called with URL:", url);
  return `https://drive.usercontent.google.com/download?id=${url}&export=download&authuser=0&confirm=t`;
}

const VideoCard = ({ image, onClick }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);

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

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={videoRef}
      className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-xl group cursor-pointer transform transition-transform duration-200 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="w-full aspect-square bg-gray-800 animate-pulse absolute z-10">
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
