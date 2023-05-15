import React from 'react'
import BaseFormField from './BaseFormField'
import BaseButton from './BaseButton'

function BaseContactUsForm({
  formHeading,
  formSubheading
}) {
  return (
    <div class="contact-us__form-section">
      <h3>{formHeading}</h3>
      <p>{formSubheading}</p>
      <form class="contact-us__form-section__form">
      <BaseFormField 
        formLabel="Name"
        className= "contact-us__form-section__form__inout"
        type= "text"
        id= "name"
        inputName= "name"
      />
      <BaseFormField 
        formLabel="Email"
        className= "contact-us__form-section__form__inout"
        type= "email"
        id= "email"
        inputName= "email"
      />
      <div class="contact-us__form-section__form__field">
        <label class="contact-us__form-section__form__field__label" for="message">Message</label>
        <div class="contact-us__form-section__form__field__textarea-wrapper">
          <textarea class="contact-us__form-section__form__textarea" placeholder="Type your message..." id="message" name="message" rows="4" cols="50" required ></textarea>
        </div>
      </div>
      <BaseButton 
        className="button contact-us__form-section__form__button"
            label="Send"
      />
      </form>
    </div>
  )
}

export default BaseContactUsForm
