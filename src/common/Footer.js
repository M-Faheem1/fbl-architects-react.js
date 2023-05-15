import React from 'react'
import SvgFooterLogo from '../assets/svgs/components/footer-logo'
import FooterItemList from './FooterItemList'
import FooterMediaIconList from './FooterMediaIconList'

function Footer() {
  return (
    <div class="custom-container">
      <div class="footer footer__navbar">
        <div class="footer__navbar__logo-wrapper">
          <SvgFooterLogo/>
        </div>
        <FooterItemList />
        <FooterMediaIconList />
      </div>
    </div>  
  )
}

export default Footer
