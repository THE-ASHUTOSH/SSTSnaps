import React, { useState, useEffect, useContext } from "react";
import "./HeroSlideShow.css";
import { EventDataContext } from "../context/EventDataContext";

function HeroSlideShow() {
  const { eventsArr } = useContext(EventDataContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [events, setevents] = useState(eventsArr.slice(0, 5)); // Display only the first 5 events

  function base(ur) {
    return `https://lh3.googleusercontent.com/d/${ur}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [events.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleScrollDown = () => {
    // Smooth scroll down
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="slideshow-container">
      <div
        className="slides-wrapper"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {events.map((slide) => (
          <div key={slide.id} className="slide">
            <img
              src={base(slide.image)}
              alt={slide.title}
              loading="lazy"
              className="slide-image"
              referrerPolicy="no-referrer"
            />
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-description">{slide.description}</p>
              <button
                className="scroll-down-button"
                onClick={handleScrollDown}
                aria-label="Scroll down"
              >
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="navigation-dots">
        {events.map((_, index) => (
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

export default HeroSlideShow;
