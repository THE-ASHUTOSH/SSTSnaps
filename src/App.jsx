import React from "react";
import { useState } from "react";
import "./App.css";

const events = [
  { id: 1, title: "Event 1", img: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Event 2", img: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Event 3", img: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Event 4", img: "https://via.placeholder.com/300x200" },
  { id: 1, title: "Event 1", img: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Event 2", img: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Event 3", img: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Event 4", img: "https://via.placeholder.com/300x200" },
  { id: 1, title: "Event 1", img: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Event 2", img: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Event 3", img: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Event 4", img: "https://via.placeholder.com/300x200" },
  { id: 1, title: "Event 1", img: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Event 2", img: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Event 3", img: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Event 4", img: "https://via.placeholder.com/300x200" },
];

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <div className="text-white text-4xl nav">SST Snap</div>
      <div className="app">
        {selectedEvent ? (
          <EventDetail
            event={selectedEvent}
            onBack={() => setSelectedEvent(null)}
          />
        ) : (
          <HorizontalScroll events={events} onSelect={setSelectedEvent} />
        )}
      </div>
    </>
  );
};

function HorizontalScroll({ events, onSelect }) {
  return (
    <div className="horizontal-scroll">
      {events.map((event) => (
        <div
          key={event.id}
          className="event-card"
          onClick={() => onSelect(event)}
        >
          <img src={event.img} alt={event.title} />
          <h3>{event.title}</h3>
        </div>
      ))}
    </div>
  );
}

function EventDetail({ event, onBack }) {
  return (
    <div className="event-detail">
      <button onClick={onBack} className="back-btn">
        Back
      </button>
      <h2>{event.title}</h2>
      <img src={event.img} alt={event.title} className="main-img" />
      <div className="download-section">
        {events.map((img) => (
          <div key={img.id} className="img-card">
            <img src={img.img} alt={img.title} />
            <a href={img.img} download className="download-btn">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
