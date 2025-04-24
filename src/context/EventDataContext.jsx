import React, { createContext, useEffect, useState } from 'react'
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "../db/db.js";


export const EventDataContext = createContext();
const EventDataContextProvider = ({ children }) => {
    const [eventsArr, setEvents] = useState([]);
    const [loading, setloading] = useState(true)

    useEffect(() => {

        const fetchEvents = async () => {
            try {

                const querySnapshot = await getDocs(collection(db, "Events"));

                const eventData = querySnapshot.docs.map(doc => ({
                    // id: doc.id,
                    ...doc.data()
                }));
                setEvents(eventData);
                setloading(false)
                console.log('Fetched events:', eventData);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
        // console.log('Events:', events); 

    }, []);
    return (
        <EventDataContext.Provider value={{eventsArr, loading}}>
            {children}
        </EventDataContext.Provider>
    )
}

export default EventDataContextProvider