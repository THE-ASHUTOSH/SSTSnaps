import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"; // Assuming you have a Footer component
import "./EventsPage.css";
import EventCard from "./EventCard";

function EventsPage({eventsArr}) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Simulated event data - in a real application, you would fetch this from an API
  useEffect(() => {
    // Simulate API fetch with setTimeout
    setTimeout(() => {
      // const eventsData = [
      //   {
      //     id: 1,
      //     title: "Music Festival",
      //     date: "Jan 15, 2025",
      //     category: "Entertainment",
      //     description:
      //       "Annual music celebration featuring top artists and bands",
      //     location: "Central Park",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 2,
      //     title: "Tech Conference",
      //     date: "Feb 2, 2025",
      //     category: "Technology",
      //     description: "Exploring the future of AI and machine learning",
      //     location: "Convention Center",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 3,
      //     title: "Art Exhibition",
      //     date: "Feb 12, 2025",
      //     category: "Arts",
      //     description:
      //       "Showcasing works from contemporary international artists",
      //     location: "Metropolitan Museum",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 4,
      //     title: "Food Festival",
      //     date: "Mar 10, 2025",
      //     category: "Culinary",
      //     description: "Taste cuisines from around the world in one location",
      //     location: "Downtown Square",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 5,
      //     title: "Business Summit",
      //     date: "Mar 24, 2025",
      //     category: "Business",
      //     description: "Leaders share insights on global market trends",
      //     location: "Grand Hotel",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 6,
      //     title: "Winter Concert",
      //     date: "Jan 8, 2025",
      //     category: "Entertainment",
      //     description:
      //       "Classical music performance featuring renowned orchestra",
      //     location: "Symphony Hall",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 7,
      //     title: "Photography Workshop",
      //     date: "Apr 5, 2025",
      //     category: "Education",
      //     description:
      //       "Learn advanced photography techniques from professionals",
      //     location: "Creative Studio",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 8,
      //     title: "Film Festival",
      //     date: "Apr 15, 2025",
      //     category: "Entertainment",
      //     description: "Screening of independent films from around the world",
      //     location: "City Cinema",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 9,
      //     title: "Science Fair",
      //     date: "May 2, 2025",
      //     category: "Education",
      //     description:
      //       "Innovative projects showcasing scientific breakthroughs",
      //     location: "Science Center",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 10,
      //     title: "Fashion Show",
      //     date: "May 20, 2025",
      //     category: "Arts",
      //     description:
      //       "Presenting the latest collections from emerging designers",
      //     location: "Fashion District",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 11,
      //     title: "Startup Pitch Competition",
      //     date: "Jun 5, 2025",
      //     category: "Business",
      //     description: "Entrepreneurs compete for funding and mentorship",
      //     location: "Innovation Hub",
      //     image: "/api/placeholder/600/400",
      //   },
      //   {
      //     id: 12,
      //     title: "Gaming Tournament",
      //     date: "Jun 15, 2025",
      //     category: "Technology",
      //     description:
      //       "Competitive gaming event with prizes and live streaming",
      //     location: "eSports Arena",
      //     image: "/api/placeholder/600/400",
      //   },
      // ];
      // console.log("eventsArr", eventsArr);
      setEvents(events,...eventsArr);
      setFilteredEvents(eventsArr);
      setLoading(false);
    }, 800); // Simulate loading delay
  }, []);

  // Get unique categories for filter buttons
  const categories = [
    "All",
    ...Array.from(new Set(events.map((event) => event.category))),
  ];

  // Filter events when active filter changes or search term changes
  useEffect(() => {
    let filtered = [...events];

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter((event) => event.category === activeFilter);
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchLower) ||
          event.description.toLowerCase().includes(searchLower) ||
          event.location.toLowerCase().includes(searchLower)
      );
    }

    setFilteredEvents(filtered);
  }, [activeFilter, searchTerm, events]);

  return (
    <div className="events-page">
      <Navbar />

      <div className="hero-section">
        <h1>All Events</h1>
        <p>Discover and explore our collection of upcoming events</p>
      </div>

      <div className="events-content">
        <div className="filter-section">
          <div className="search-bar">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

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
        </div>

        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading events...</p>
          </div>
        ) : filteredEvents.length > 0 ? (
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <EventCard event = {event} key={event.id}/>

            ))}
          </div>
        ) : (
          <div className="no-events">
            <svg
              className="no-results-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3>No events found</h3>
            <p>
              Try changing your search criteria or check back later for new
              events.
            </p>
            <button
              className="reset-filters-btn"
              onClick={() => {
                setActiveFilter("All");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default EventsPage;
