import React from 'react'
import OurTeamMember from './OurTeamMember'
import TeamMember1 from '../../assets/images/team-image-1.png'
import TeamMember2 from '../../assets/images/team-image-2.png'
import TeamMember3 from '../../assets/images/team-image-3.png'

function OurTeam() {
  return (
    <div class="custom-container">
    <div class="our-team">
      <h3>Our team</h3>
      <div class="our-team__members-list">
        <OurTeamMember 
          memberImage = {TeamMember1}
          imageTitle= "Matt Lester"
          memberName= "Matt Lester"
        />
        <OurTeamMember 
          memberImage = {TeamMember2}
          imageTitle= "Jordanna Akthar"
          memberName= "Jordanna Akthar"
        />
        <OurTeamMember 
          memberImage = {TeamMember3}
          imageTitle= "Anum Bain"
          memberName= "Anum Bain"
        />
      </div>
    </div>
  </div>
  )
}

export default OurTeam
