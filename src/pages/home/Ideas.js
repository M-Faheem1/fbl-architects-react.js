import React from 'react'
import BaseButton from '../../base/BaseButton'
import SvgRectangleLine from '../../assets/svgs/components/rectangle-line'

function Ideas() {
  return (
    <div className="custom-container">
      <div className="bring-your-ideas">
        <div className="bring-your-ideas__header">
          <h3>Let's bring your ideas into reality</h3>
          <SvgRectangleLine />
        </div>
          <BaseButton 
            className= "button  bring-your-ideas__contact-us"
            label= "Contact Us"
          />
      </div>
    </div>  
  )
}

export default Ideas
