import React, { useRef, useState, useEffect } from "react";
import "./Events2.css";
import EventCard from "./EventCard";

function EventsSection({ eventsArr }) {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventsArray, setEventsArray] = useState([]);
  const [categories, setcategories] = useState(["All"]);

  useEffect(() => {
    setEventsArray(eventsArr);
  }, []);

  // Enhanced event data with descriptions and categories
  // const pastEvents = [
  //   {
  //     id: 1,
  //     title: "Music Festival",
  //     date: "Jan 15, 2025",
  //     category: "Entertainment",
  //     description: "Annual music celebration featuring top artists and bands",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 2,
  //     title: "Tech Conference",
  //     date: "Feb 2, 2025",
  //     category: "Technology",
  //     description: "Exploring the future of AI and machine learning",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 3,
  //     title: "Art Exhibition",
  //     date: "Feb 12, 2025",
  //     category: "Arts",
  //     description: "Showcasing works from contemporary international artists",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 4,
  //     title: "Food Festival",
  //     date: "Mar 10, 2025",
  //     category: "Culinary",
  //     description: "Taste cuisines from around the world in one location",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 5,
  //     title: "Business Summit",
  //     date: "Mar 24, 2025",
  //     category: "Business",
  //     description: "Leaders share insights on global market trends",
  //     image: "/api/placeholder/600/400",
  //   },
  //   {
  //     id: 6,
  //     title: "Winter Concert",
  //     date: "Jan 8, 2025",
  //     category: "Entertainment",
  //     description: "Classical music performance featuring renowned orchestra",
  //     image: "/api/placeholder/600/400",
  //   },
  // ];
  // console.log(eventsArray);
  // Get unique categories for filter buttons
  useEffect(() => {
    setcategories([
      "All",
      ...Array.from(new Set(eventsArray.map((event) => event["category"]))),
    ]);
  }, [eventsArray]);

  // Filter events when active filter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredEvents(eventsArray);
    } else {
      setFilteredEvents(
        eventsArray.filter((event) => event.category === activeFilter)
      );
    }
  }, [activeFilter, categories]);

  const handleScroll = (direction) => {
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 350;
      if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
    setTimeout(() => setIsScrolling(false), 500);
  };

  return (
    <div className="events-section">
      <div className="events-container">
        <h2 className="events-title">Events</h2>
        <p className="events-subtitle">
          Discover our past events and explore what we have in store
        </p>

        {/* Category Filter Buttons */}
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter-btn ${
                activeFilter === category ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-container">
          {/* Navigation Controls */}
          <button
            onClick={() => handleScroll("left")}
            className={`scroll-btn scroll-left ${
              isScrolling || filteredEvents.length <= 3 ? "btn-disabled" : ""
            }`}
            aria-label="Scroll left"
            disabled={isScrolling || filteredEvents.length <= 3}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="scroll-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Events Gallery */}
          <div ref={scrollContainerRef} className="events-gallery">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => <EventCard event={event} />)
            ) : (
              <div className="no-events-message">
                <p>No events found in this category.</p>
              </div>
            )}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className={`scroll-btn scroll-right ${
              isScrolling || filteredEvents.length <= 3 ? "btn-disabled" : ""
            }`}
            aria-label="Scroll right"
            disabled={isScrolling || filteredEvents.length <= 3}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="scroll-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="view-all-container">
          <button className="view-all-btn">View All Events</button>
        </div>
      </div>
    </div>
  );
}

export default EventsSection;
