import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import EventDetail from "./components/EventDetail";
import HorizontalScroll from "./components/HorizontalScroll";

const events = [
  { id: 1, title: "Event 1", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 2, title: "Event 2", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 3, title: "Event 3", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 4, title: "Event 4", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 5, title: "Event 5", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 6, title: "Event 6", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 7, title: "Event 7", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 8, title: "Event 8", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 9, title: "Event 9", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 10, title: "Event 10", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 11, title: "Event 11", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 12, title: "Event 12", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 13, title: "Event 13", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 14, title: "Event 14", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 15, title: "Event 15", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" },
  { id: 16, title: "Event 16", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnR8ZW58MHx8MHx8fDA%3Dhttps://via.placeholder.com/300x200" }
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



export default App;
