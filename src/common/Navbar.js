import React from 'react'
import SvgFblLogo from '../assets/svgs/components/fbl-logo'
import NavbarListItems from './NavbarListItems'
import BaseButton from '../base/BaseButton'

function Navbar() {
  return (
    <div className="custom-container">
      <div className="navbar">
        <div className="navbar__logo">
          <a href="#">
            <SvgFblLogo />
          </a>
        </div>
        <div className="navbar__items-wrapper">
          <NavbarListItems />
          <BaseButton 
            className="button  button--contact-us"
            label="Contact Us" 
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
