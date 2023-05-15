import React from 'react'
import Image1 from '../../assets/images/Image-1.png'
import LocationTag from '../../base/LocationTag'

function DreamHouseImage() {
  return (
    <div className="dream-house-section__image">
      <img src={Image1} alt="home image"/>
      <LocationTag 
        className="dream-house-section__image__location dream-house-section__image__location--tokyo"
        location="Tokyo"
      />
      <LocationTag 
        className="dream-house-section__image__location dream-house-section__image__location--frankfurt"
        location="Frankfurt"
      />
    </div>
  )
}

export default DreamHouseImage
