import React, { createContext, useContext, useEffect, useState } from "react";
import {
    collection,
    getDocs,
    doc
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "../db/db.js";
import { EventDataContext } from "./EventDataContext.jsx";

export const ImageDataContext = createContext();
const ImageDataContextProvider = ({ children }) => {
    const { eventsArr, loading } = useContext(EventDataContext)
    const [EventdefID, setEventdefID] = useState()
    const [imageArr, setimages] = useState([]);

    

        useEffect(() => {
            const fetchImages = () => {

                const event = eventsArr.find((event) => event.defid === EventdefID);
                // console.log(event, "event")
                if (event && event.imageArr) {
                    setimages(event.imageArr);
                } else {
                    setimages([]); // Set empty array if no matching event found
                }

                
                console.log("Fetched images:", imageArr);
                // console.log("id", EventdefID);
            };

            fetchImages();
            // console.log('Events:', events);
        }, [EventdefID,loading]);

    



    return (
        <ImageDataContext.Provider value={{ imageArr, loading, setEventdefID }}>
            {children}
        </ImageDataContext.Provider>
    )
}

export default ImageDataContextProvider