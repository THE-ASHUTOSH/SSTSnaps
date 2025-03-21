import React from 'react'

const EventDetail = ({ event, onBack }) => {
  return (
    <div className="event-detail">
      <button onClick={onBack} className="back-btn">
        Back
      </button>
      <h2>{event.title}</h2>
      <img src={event.img} alt={event.title} className="main-img" />
      <div className="download-section">
        {events.map((img) => (
          <div key={img.id} className="img-card">
            <img src={img.img} alt={img.title} />
            <a href={img.img} download className="download-btn">
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventDetail