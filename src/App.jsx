import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import EventDetail from "./components/EventDetail";
import HorizontalScroll from "./components/HorizontalScroll";
import { db } from "./db/db";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import axios from "axios";

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  
  function base(ur){
    return `https://lh3.googleusercontent.com/d/${ur}`
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
  }

  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Holi"));
        const eventData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEvents(eventData);
        console.log('Fetched events:', eventData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);


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
