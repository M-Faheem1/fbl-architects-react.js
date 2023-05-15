import React from 'react'
import SkilledArchitectureDescription from './SkilledArchitectureDescription'
import SkilledArchitectureImage from './SkilledArchitectureImage'

function SkilledArchitecture() {
  return (
    <div className="custom-container">
      <div className="skilled-architecture">
        <SkilledArchitectureDescription 
          heading= "Bringing together experience and understanding"
          subHeading= "Work with our skilled architects to develop a design that is unique to you and your space."
        />
        <SkilledArchitectureImage />
      </div>
    </div>  
  )
}

export default SkilledArchitecture
