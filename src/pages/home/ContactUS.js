import React from 'react'
import BaseContactUsForm from '../../base/BaseContactUsForm'
import FormImage from '../../assets/images/map-image.png'
import ContactUsImage from './ContactUsImage'

function ContactUS() {
  return (
    <div class="custom-container">
    <div class="contact-us">
      <BaseContactUsForm 
        formHeading= "Contact Us"
        formSubheading="Send us a message and we'll get back shortly."
      />
      <ContactUsImage 
        FormImage = {FormImage}
        FormTitle= "Map Image"
      />
    </div>
  </div>
  )
}

export default ContactUS
