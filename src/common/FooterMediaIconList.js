import React from 'react'
import SvgFacebookSvg from '../assets/svgs/components/facebook-svg'
import SvgInstagram from '../assets/svgs/components/instagram'
import SvgTwitter from '../assets/svgs/components/twitter'
import SvgLinkedIn from '../assets/svgs/components/linked-in'

function FooterMediaIconList() {
  return (
    <div class="footer__navbar__social-media-icons__listing">
      <div class="footer__navbar__social-media-icons__listing__icon-wrapper">
        <a href="#">
          <SvgFacebookSvg />
        </a>
      </div>

      <div class="footer__navbar__social-media-icons__listing__icon-wrapper">
        <a href="#">
          <SvgInstagram />
        </a>
      </div>

      <div class="footer__navbar__social-media-icons__listing__icon-wrapper">
        <a href="#">
          <SvgTwitter />
        </a>
      </div>

      <div class="footer__navbar__social-media-icons__listing__icon-wrapper">
        <a href="#">
          <SvgLinkedIn />
        </a>
      </div>
    </div>
  )
}

export default FooterMediaIconList
