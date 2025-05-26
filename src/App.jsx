import React, { useContext, Suspense, lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
const HeroSlideShow = lazy(() => import("./components/HeroSlideShow"));
const EventsSection = lazy(() => import("./components/EventsSection"));
const Events2 = lazy(() => import("./components/Events2"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const ImageGallery = lazy(() => import("./pages/Images"));
const VideoDisplay = lazy(() => import("./pages/VideoDisplay"));
const Footer = lazy(() => import("./components/Footer"));
import Navbar from "./components/Navbar";

import { db } from "./db/db";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import "./App.css";
import { EventDataContext } from "./context/EventDataContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImageDataContext } from "./context/ImageDataContext";

function App() {
  const [photo, setphoto] = useState([]);
  const { eventsArr, loading } = useContext(EventDataContext);
  const { imageArr } = useContext(ImageDataContext);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  // console.log("Image Array:", imageArr);

  function base(ur) {
    return `https://lh3.googleusercontent.com/d/${ur}`;
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  {loading == false && (
                    <>
                      <HeroSlideShow />
                      <EventsSection />
                      <Events2 />
                      <Footer></Footer>
                    </>
                  )}
                </>
              }
            />
            <Route path="/eventsPage" element={<EventsPage />} />
            <Route path="/gallery/images" element={<ImageGallery />} />
            <Route path="/gallery/videos" element={<VideoDisplay />} />
            <Route path="/review" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
