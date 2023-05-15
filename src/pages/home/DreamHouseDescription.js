import React from 'react'
import BaseButton from '../../base/BaseButton'

function DreamHouseDescription({descriptionHeading,descriptionsubHeading,totalProjects}) {
  return (
    <div className="dream-house-section__description">
    <h1>{descriptionHeading}</h1>
    <p>{descriptionsubHeading}</p>
    <div className="dream-house-section__contact--detail">
      <div className="button__wrapper">
        <BaseButton
          className="button  button--contact-us" 
          label='Contact Us' 
        />
      </div>
      <span>{totalProjects}</span>
    </div>
  </div>
  )
}

export default DreamHouseDescription
