import React from 'react'
import SvgLocationSvg from '../assets/svgs/components/location-svg'

export default function LocationTag({className,location}) {
  return (
    <div className={className}>
      <SvgLocationSvg />
      <span>{location}</span>
    </div>
  )
}
