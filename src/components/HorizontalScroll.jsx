import React from 'react'
import ImageCard from './ImageCard'

const HorizontalScroll = ({ events  }) => {

  return (
    <div className="horizontal-scroll">
    {events.map((event,index) => (
      <ImageCard key={index} event={event} index={index} />
    ))}
  </div>
  )
}

export default HorizontalScroll