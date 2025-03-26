import React from "react";

const ImageCard = ({event, onSelect,index}) => {

  function base(ur){
    return `https://lh3.googleusercontent.com/d/${ur}`
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
  }

  return (
    <div key={index} className="event-card" onClick={() => onSelect(event)}>
      <img src={base(event.img)} alt={index} />
      <h3>{`Photo no: ${index}`}</h3>
    </div>
  );
};

export default ImageCard;
