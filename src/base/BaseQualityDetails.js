import React from 'react'

function BaseQualityDetails({title,subTitle}) {
  return (
    <div className="summarize__description__our-qualities__detail">
      <span> {title} </span>
      <p> {subTitle} </p>
    </div>
  )
}

export default BaseQualityDetails
