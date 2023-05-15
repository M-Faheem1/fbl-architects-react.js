import React from 'react'

function ContactUsImage({
  FormImage,
  FormTitle,
}) {
  return (
    <div class="contact-us__image-wrapper">
      <img src={FormImage} alt={FormTitle} />
    </div>
  )
}

export default ContactUsImage
