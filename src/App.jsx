import React from "react";
import Navbar from "./components/Navbar";
import HeroSlideshow from "./components/HeroSlideshow";
import EventsSection from "./components/EventsSection";
import Events2 from "./components/Events2";
// import Footer from "./components/Footer";
import EventsPage from "./components/EventsPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSlideshow />
      <EventsSection />
      <Events2></Events2>
      <EventsPage></EventsPage>
    </div>
  );
}

export default App;
