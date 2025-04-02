import React from 'react'
import { useState } from 'react'

const EventCard = ({event}) => {
  return (
    <div className="event-card">
    <div className="event-image-container">
      <img
        src={event.image}
        alt={event.title}
        className="event-image"
      />
      <div className="event-category">{event.category}</div>
    </div>
    <div className="event-details">
      <h3 className="event-title">{event.title}</h3>
      <p className="event-date">{event.date}</p>
      <p className="event-location">
        <svg
          className="location-icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        {event.location}
      </p>
      <p className="event-description">{event.description}</p>
      <button className="view-details-btn">View Details</button>
    </div>
  </div>
  )
}

export default EventCard