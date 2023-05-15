import React from 'react'
import BaseQualityDetails from './BaseQualityDetails'

function BaseQuality() {
  return (
    <div className="summarize__description__our-qualities">
      <BaseQualityDetails 
        title= "We listen to you"
        subTitle="To begin the project, you'll share everything with us through a video conference call."
      />
      <BaseQualityDetails 
        title= "We collaborate with you"
        subTitle="We incorporates your ideas into the space design and make adjustments depending on your comments to make sure it will satisfy your needs."
      />
    </div>
  )
}

export default BaseQuality
