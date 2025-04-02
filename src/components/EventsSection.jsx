import React, { useRef } from "react";
import "./EventsSection.css";
import imageGolden from "./Gc.png";

function EventsSection() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const pastEvents = [
    {
      id: 1,
      title: "Music Festival",
      date: "Jan 15, 2025",
      image: imageGolden,
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "Feb 2, 2025",
      image: imageGolden,
    },
    {
      id: 3,
      title: "Art Exhibition",
      date: "Feb 12, 2025",
      image: imageGolden,
    },
    {
      id: 4,
      title: "Food Festival",
      date: "Mar 10, 2025",
      image: imageGolden,
    },
    {
      id: 5,
      title: "Business Summit",
      date: "Mar 24, 2025",
      image: imageGolden,
    },
    {
      id: 6,
      title: "Winter Concert",
      date: "Jan 8, 2025",
      image: imageGolden,
    },
  ];

  return (
    <div className="events-section">
      <div className="events-container">
        <h2 className="events-title">Event Gallery</h2>

        <div className="events-slider-container">
          {/* Left Button */}
          <button
            onClick={() => handleScroll("left")}
            className="scroll-button left-button"
            aria-label="Scroll left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Gallery Container */}
          <div
            ref={scrollContainerRef}
            className="events-cards-container hide-scrollbar"
          >
            <div className="events-cards-wrapper">
              {pastEvents.map((event) => (
                <div key={event.id} className="event-card">
                  <div className="event-image-container">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="event-image"
                    />
                    <div className="event-overlay">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-date">{event.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Button */}
          <button
            onClick={() => handleScroll("right")}
            className="scroll-button right-button"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
