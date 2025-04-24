import React, { useState, useEffect, useContext } from "react";
import "./HeroSlideShow.css";
import { EventDataContext } from "../context/EventDataContext";

function HeroSlideShow() {
  const{eventsArr} = useContext(EventDataContext)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [events, setevents] = useState(eventsArr.slice(0, 3)); // Display only the first 3 events
  // const slides = [
  //   {
  //     id: 1,
  //     image: imgDark,
  //     title: "Welcome to Our Platform",
  //     description: "Discover amazing events and experiences",
  //   },
  //   {
  //     id: 2,
  //     image: imgDark,
  //     title: "Featured Events",
  //     description: "Check out our most popular upcoming events",
  //   },
  //   {
  //     id: 3,
  //     image: imgDark,
  //     title: "Join the Community",
  //     description: "Connect with like-minded individuals",
  //   },
  // ];

  function base(ur) {
    return `https://lh3.googleusercontent.com/d/${ur}`;
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
    // https://lh3.googleusercontent.com/d/
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === events.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
              className="slide-image"
              referrerPolicy="no-referrer"
            />
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
