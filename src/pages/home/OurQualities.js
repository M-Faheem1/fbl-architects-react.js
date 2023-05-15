import React from 'react'
import OurQualitiesDescription from './OurQualitiesDescription'
import OurQualitiesImage from './OurQualitiesImage'

function OurQualities() {
  return (
    <div className="custom-container">
      <div className="summarize">
        <OurQualitiesImage />
        <OurQualitiesDescription 
          heading="Tailored to you"
          subHeading="We transform your idea into a gorgeous place that reflects your requirements and wants, personally adapted to your style and budget, thanks to our 20-plus years of experience."
        />
      </div>
    </div>  
  )
}

export default OurQualities
