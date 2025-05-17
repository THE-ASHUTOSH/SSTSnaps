import React, { useContext, useRef, useState } from "react";
import "./EventsSection.css";
import { EventDataContext } from "../context/EventDataContext";

function EventsSection() {
  const {eventsArr} = useContext(EventDataContext);
  function shuffleArray(array1) {
    let array = [...array1];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  const scrollContainerRef = useRef(null);
  const [events, setevents] = useState(shuffleArray(eventsArr).splice(0, 8));

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

  // const pastEvents = [
  //   {
  //     id: 1,
  //     title: "Music Festival",
  //     date: "Jan 15, 2025",
  //     image: imageGolden,
  //   },
  //   {
  //     id: 2,
  //     title: "Tech Conference",
  //     date: "Feb 2, 2025",
  //     image: imageGolden,
  //   },
  //   {
  //     id: 3,
  //     title: "Art Exhibition",
  //     date: "Feb 12, 2025",
  //     image: imageGolden,
  //   },
  //   {
  //     id: 4,
  //     title: "Food Festival",
  //     date: "Mar 10, 2025",
  //     image: imageGolden,
  //   },
  //   {
  //     id: 5,
  //     title: "Business Summit",
  //     date: "Mar 24, 2025",
  //     image: imageGolden,
  //   },
  //   {
  //     id: 6,
  //     title: "Winter Concert",
  //     date: "Jan 8, 2025",
  //     image: imageGolden,
  //   },
  // ];

  function base(ur) {
    return `https://lh3.googleusercontent.com/d/${ur}`;
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
    // https://lh3.googleusercontent.com/d/
  }

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
              {events.map((event) => (
                <div key={event.defid} className="event-card">
                  <div className="event-image-container">
                    <img
                      src={base(event.image)}
                      alt={event.title}
                      loading="lazy"
                      className="event-image"
                      referrerPolicy="no-referrer"
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
