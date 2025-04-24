import { useState } from "react";
import Navbar from "../components/Navbar";
import eventImages from "./Gc.png";
// import "./Footer.css";
export default function Events() {
  const [currentPage, setCurrentPage] = useState("events");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="events-container">
      <Navbar onNavigate={handleNavigation} />
      <h1 className="events-heading">Events</h1>
      <div className="event-grid">
        {eventImages.map((event, index) => (
          <EventCard key={index} image={event} />
        ))}
      </div>
      <footer className="footer">
        <p>&copy; 2025 Scaler School of Technology. All rights reserved.</p>
      </footer>
    </div>
  );
}
