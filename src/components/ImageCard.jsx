import React from "react";

const ImageCard = (event, onSelect) => {
  return (
    <div key={event.id} className="event-card" onClick={() => onSelect(event)}>
      <img src={event.img} alt={event.title} />
      <h3>{event.title}</h3>
    </div>
  );
};

export default ImageCard;
