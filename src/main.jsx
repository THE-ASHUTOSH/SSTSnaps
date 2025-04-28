import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventDataContextProvider from "./context/EventDataContext.jsx";
import ImageDataContextProvider from "./context/ImageDataContext.jsx";

createRoot(document.getElementById("root")).render(
    <EventDataContextProvider>
        <ImageDataContextProvider>
            <App />
        </ImageDataContextProvider>
    </EventDataContextProvider>
);
