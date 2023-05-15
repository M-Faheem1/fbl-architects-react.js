import React from 'react'
import DreamHouseDescription from './DreamHouseDescription'
import DreamHouseImage from './DreamHouseImage'

function DreamHouse() {
  return (
    <div className="custom-container">
    <div className="dream-house-section">
      <DreamHouseDescription 
        descriptionHeading= "Build your dream house with renowned architects"
        descriptionsubHeading= "FBL Architects has built some of the world's most recognized buildings. Our architects will help you build your dream house."
        totalProjects= "128+ Projects featured all over the world"
      />
      <DreamHouseImage />
    </div>
  </div>  
  )
}

export default DreamHouse
