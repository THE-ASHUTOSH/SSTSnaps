import React, { useContext } from "react";
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
import { EventDataContext } from "./context/EventDataContext";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [photo, setphoto] = useState([])
  const { eventsArr, loading } = useContext(EventDataContext)

  function base(ur) {
    return `https://lh3.googleusercontent.com/d/${ur}`
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
  }




  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              {loading == false && (
                <>
                  <HeroSlideShow />
                  <EventsSection />
                  <Events2 />
                  <EventsPage />
                </>
              )}
            </>
          } />
          <Route path="/events" element={<EventsSection />} />
          <Route path="/review" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
