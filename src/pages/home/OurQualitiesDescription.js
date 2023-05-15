import React from 'react'
import BaseQuality from '../../base/BaseQuality'

function OurQualitiesDescription({heading,subHeading}) {
  return (
    <div className="summarize__description">
      <h3>{heading}</h3>
      <p>
        {subHeading}
      </p>
      <BaseQuality />
    </div>
  )
}

export default OurQualitiesDescription
