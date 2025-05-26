import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventDataContextProvider from "./context/EventDataContext.jsx";
import ImageDataContextProvider from "./context/ImageDataContext.jsx";
import VideoDataContextProvider from "./context/VideoDataContext.jsx";

createRoot(document.getElementById("root")).render(
    <EventDataContextProvider>
        <ImageDataContextProvider>
            <VideoDataContextProvider>
                <App />
            </VideoDataContextProvider>
        </ImageDataContextProvider>
    </EventDataContextProvider>
);
