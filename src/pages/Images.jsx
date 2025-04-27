import React, { useState } from "react";
import { ArrowDownToLine } from "lucide-react";
import Navbar from "../components/Navbar";

const ImageGallery = () => {
  // Dummy array of images with titles and URLs
  const imageArray = [
    {
      id: 1,
      title: "Mountain Landscape",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // updated!
      alt: "Mountain landscape view",
    },
    {
      id: 2,
      title: "Beach Sunset",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Beautiful beach sunset",
    },
    {
      id: 3,
      title: "City Skyline",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Modern city skyline",
    },
    {
      id: 4,
      title: "Forest Path",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Path through a dense forest",
    },
    {
      id: 5,
      title: "Abstract Art",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Colorful abstract artwork",
    },
    {
      id: 6,
      title: "Wildlife Photo",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Wildlife photography",
    },
    {
      id: 7,
      title: "Urban Architecture",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Modern urban architecture",
    },
    {
      id: 8,
      title: "Night Sky",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Starry night sky",
    },
    {
      id: 9,
      title: "Desert Landscape",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Desert landscape at sunset",
    },
    {
      id: 10,
      title: "Underwater Scene",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Colorful underwater coral reef",
    },
    {
      id: 11,
      title: "Food Photography",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Gourmet meal arrangement",
    },
    {
      id: 12,
      title: "Historical Monument",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Ancient historical monument",
    },
    {
      id: 13,
      title: "Space Imagery",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Galaxy from telescope",
    },
    {
      id: 14,
      title: "Garden Flowers",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Vibrant garden flower arrangement",
    },
    {
      id: 15,
      title: "Snow Mountain",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Snow covered mountain peaks",
    },
    {
      id: 16,
      title: "Waterfall",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Tropical waterfall in forest",
    },
  ];

  const downloadImage = (url, title) => {
    // In a real application, this would trigger the download
    // For this demo, we'll just navigate to the URL
    window.open(url, "_blank");
  };

  // Organize images into columns (4 images per column)
  const columns = [[], [], [], []];
  imageArray.forEach((image, index) => {
    const columnIndex = index % 4;
    columns[columnIndex].push(image);
  });

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-24 px-4 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] bg-clip-text text-transparent">
          Image Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {columns.map((column, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-col gap-6">
              {column.map((image) => (
                <ImageCard
                  key={image.id}
                  image={image}
                  onDownload={downloadImage}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ image, onDownload }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden bg-[#1e1e1e] border border-gray-800 shadow-xl group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-52 object-cover transition-opacity duration-300"
      />

      {/* Overlay and download button that appear on hover */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center">
          <h3 className="text-white font-medium mb-2">{image.title}</h3>
          <button
            onClick={() => onDownload(image.url, image.title)}
            className="bg-gradient-to-r from-[#4f46e5] to-[#8b5cf6] text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <ArrowDownToLine size={18} />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
