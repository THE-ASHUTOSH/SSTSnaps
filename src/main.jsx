import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventDataContextProvider from "./context/EventDataContext.jsx";

createRoot(document.getElementById("root")).render(
    <EventDataContextProvider>
        <App />
    </EventDataContextProvider>
);
