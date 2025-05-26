import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './GalleryToggle.css';

const GalleryToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isGalleryRoute = location.pathname.includes('/gallery/');

  if (!isGalleryRoute) return null;

  const handleToggle = () => {
    if (location.pathname === '/gallery/images') {
      navigate('/gallery/videos');
    } else {
      navigate('/gallery/images');
    }
  };

  return (
    <button 
      className="gallery-toggle"
      onClick={handleToggle}
    >
      {location.pathname === '/gallery/images' ? 'Switch to Videos' : 'Switch to Images'}
    </button>
  );
};

export default GalleryToggle;
