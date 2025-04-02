import React, { useState, useEffect } from "react";
import "./HeroSlideshow.css";
import imgDark from "./Gc.png";

function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: imgDark,
      title: "Welcome to Our Platform",
      description: "Discover amazing events and experiences",
    },
    {
      id: 2,
      image: imgDark,
      title: "Featured Events",
      description: "Check out our most popular upcoming events",
    },
    {
      id: 3,
      image: imgDark,
      title: "Join the Community",
      description: "Connect with like-minded individuals",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slideshow-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <button className="cssbuttons-io">
                <span>Learn More</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlideshow;
