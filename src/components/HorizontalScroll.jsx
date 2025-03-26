import React from 'react'
import ImageCard from './ImageCard'

const HorizontalScroll = ({ events, onSelect  }) => {

  return (
    <div className="horizontal-scroll">
    {events.map((event,index) => (
      <ImageCard key={index} event={event} onSelect={onSelect} index={index} />
    ))}
  </div>
  )
}

export default HorizontalScroll