import React from 'react'

function BaseCard({description,personName,company,personImage,personTitle}) {
  return (
    <>
      <div className="testimonial__cards-section__card">
        <p> {description} </p>
        <div className="testimonial__cards-section__card__person">
          <div className="testimonial__cards-section__card__person__image-wrapper">
            <img src={personImage} alt={personTitle} />
          </div>
          <div>
            <h4>{personName}</h4>
            <span>{company}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default BaseCard
