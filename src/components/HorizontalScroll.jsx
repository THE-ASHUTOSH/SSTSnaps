import React from 'react'
import ImageCard from './ImageCard'

const HorizontalScroll = ({ events, onSelect  }) => {

  return (
    <div className="horizontal-scroll">
    {events.map((event) => (
      ImageCard(event, onSelect)
    ))}
  </div>
  )
}

export default HorizontalScroll