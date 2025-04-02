import React from "react";
import Navbar from "./components/Navbar";
import HeroSlideShow from "./components/HeroSlideShow";
import EventsSection from "./components/EventsSection";
import Events2 from "./components/Events2";
// import Footer from "./components/Footer";
import EventsPage from "./components/EventsPage";
import { db } from "./db/db";
import { useState, useEffect } from "react";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import "./App.css";

function App() {

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
          // id: doc.id,
          ...doc.data()
        }));
        setEvents(eventData);
        console.log('Fetched events:', eventData);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents(); 
    console.log('Events:', events); 
    
  }, []);


  return (
    <div className="app">
      <Navbar />
      <HeroSlideShow />
      <EventsSection />
      <Events2></Events2>
      <EventsPage eventsObj = {events}></EventsPage>
    </div>
  );
}


export default App;
