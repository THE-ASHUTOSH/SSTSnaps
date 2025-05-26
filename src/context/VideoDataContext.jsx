import React, { createContext, useContext, useEffect, useState } from "react";
import {
    collection,
    getDocs,
    doc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "../db/db.js";
import { EventDataContext } from "./EventDataContext.jsx";

export const VideoDataContext = createContext();

const VideoDataContextProvider = ({ children }) => {
    const { eventsArr, loading } = useContext(EventDataContext)
    const [EventdefID, setEventdefID] = useState()
    const [videoArr, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = () => {
            const event = eventsArr.find((event) => event.defid === EventdefID);
            if (event && event.vidArr) {
                setVideos(event.vidArr);
            } else {
                setVideos([]); // Set empty array if no matching event found
            }
            console.log("Fetched videos:", videoArr);
        };

        fetchVideos();
    }, [EventdefID, loading]);

    return (
        <VideoDataContext.Provider value={{ videoArr, loading, setEventdefID }}>
            {children}
        </VideoDataContext.Provider>
    )
}

export default VideoDataContextProvider;
