import React from 'react'

function BaseFormField({
  formLabel, 
  className,
  type,
  id,
  inputName,
}) {
  return (
    <div class="contact-us__form-section__form__field">
      <label class="contact-us__form-section__form__field__label" for="name">{formLabel}</label>
      <div class="contact-us__form-section__form__field__input-wrapper">
        <input class={className} type={type} id={id} name={inputName} required />
      </div>    
    </div>
  )
}

export default BaseFormField