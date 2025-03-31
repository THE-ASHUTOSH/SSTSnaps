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
  const [photo, setphoto] = useState([])
  
  function base(ur){
    return `https://lh3.googleusercontent.com/d/${ur}`
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
  }

  
  useEffect(() => {
    
    const fetchEvents = async () => {
      try {
        
        const querySnapshot = await getDocs(collection(db, "Events"));
        
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


  useEffect(() => {
    const fetchPhotos = async (event,index) => {
    
      try {
        
        const querySnapshot = await getDocs(collection(db, event));
        
        const photoData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched photo:', photoData);
        setphoto(prevPhotos => [...prevPhotos, [...photoData]])
      } catch (error) {
        console.error("Error fetching events:", error);
      }
      ;
    };

    events.map((event,index) => {
      fetchPhotos(event.event,index)
    })
  }, [events])
  
  console.log('Fetched :', photo)

  

  return (
    <>
      <div className="text-white text-4xl nav">SST Snap</div>
      <div className="app">
      {
          photo.map((event,index) => (
            <>
            <div>Event</div>
            <HorizontalScroll events={event} key={index} />
            </>
            
          ))
          // <HorizontalScroll events={events} />
      }
      
      </div>
    </>
  );
};



export default App;
