import React, { createContext, useEffect, useState } from "react";
import {
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { db } from "../db/db.js";

export const EventDataContext = createContext();
const EventDataContextProvider = ({ children }) => {
    const [eventsArr, setEvents] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Events"));

                const eventData = querySnapshot.docs.map(doc => ({
                    defid: doc.id,
                    ...doc.data()
                }));

                const sortedEventData = eventData.sort((a, b) => {
                    return b.id.localeCompare(a.id); // For string IDs
                    // return a.id - b.id;
                });

                setEvents(sortedEventData);
                setloading(false);
                console.log("Fetched events:", eventData);
                console.log("Sorted events:", sortedEventData);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        fetchEvents();
        // console.log('Events:', events);
    }, []);
    return (
        <EventDataContext.Provider value={{ eventsArr, loading }}>
            {children}
        </EventDataContext.Provider>
    );
};

export default EventDataContextProvider;

//{
//     id: 1,
//     title: "Music Festival",
//     date: "Jan 15, 2025",
//     category: "Entertainment",
//     description: "Annual music celebration featuring top artists and bands",
//     image: "/api/placeholder/600/400",
//     location : SST
//   }
