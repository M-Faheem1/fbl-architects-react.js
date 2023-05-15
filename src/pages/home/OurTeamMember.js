import React from 'react'
import SvgLinkedInProfile from '../../assets/svgs/components/linked-in-profile'

function OurTeamMember({memberImage,imageTitle,memberName}) {
  return (
    <>
    <div class="our-team__members-list--member">
          <a href="#"> 
            <img src={memberImage} alt={imageTitle} /> 
          </a>
          <div class="our-team__members-list--member--name">
            <span>{memberName}</span>
            <SvgLinkedInProfile />
          </div>
      </div>
    </>
  )
}

export default OurTeamMember
