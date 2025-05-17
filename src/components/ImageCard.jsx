import React, { useEffect, useRef } from "react";

const ImageCard = ({event, onSelect, index}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  function base(ur){
    return `https://lh3.googleusercontent.com/d/${ur}`
    // https://lh3.googleusercontent.com/u/0/drive-usercontent/
    // https://lh3.googleusercontent.com/d/
  }

  return (
    <div key={index} className="event-card" onClick={() => onSelect(event)}>
      <img 
        ref={imgRef}
        src={base(event.img)} 
        alt={index} 
        referrerPolicy="no-referrer" 
        loading="lazy"
        className="fade"
      />
      <h3>{`Photo no: ${index+1}`}</h3>
    </div>
  );
};

export default ImageCard;
