import React, { useContext, useState,useEffect, useRef } from "react";
import { ArrowDownToLine } from "lucide-react";
import Navbar from "../components/Navbar";
import { ImageDataContext } from "../context/ImageDataContext";

const ImageGallery = () => {
  const {imageArr, loading } = useContext(ImageDataContext)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadImage = (url, title) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-24 px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
          Image Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {imageArr !== undefined ? 
            imageArr.map((image, id) => (
              <ImageCard
                key={id}
                image={image}
                // onDownload={downloadImage}
              />
            ))
            : <h1>Loading ...</h1>
          }
        </div>
      </div>
    </div>
  );
};


function base(ur) {
  return `https://lh3.googleusercontent.com/d/${ur}`;
  // https://lh3.googleusercontent.com/u/0/drive-usercontent/
}
const ImageCard = ({ image, onDownload }) => {
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
      className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-xl group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
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
          alt="image"
          className={`w-full h-52 object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${isInView ? 'scale-100' : 'scale-95'}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
      
      
      {/* Overlay and download button that appear on hover */}
      {/* <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center">
          <h3 className="text-white font-medium mb-2">{image.title}</h3>
          <button
            onClick={() => onDownload(image, image.defid)}
            className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <ArrowDownToLine size={18} />
            Download
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default ImageGallery;
