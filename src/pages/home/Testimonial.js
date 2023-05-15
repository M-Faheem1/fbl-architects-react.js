import React from 'react'
import JaneDoe from '../../assets/images/ceo-img.jpg'
import JohnDoe from '../../assets/images/ceo-img.jpg'
import BillDoe from '../../assets/images/ceo-img.jpg'
import BaseCard from '../../base/BaseCard'

function Testimonial() {
  return (
    <div className="custom-container">
      <div className="testimonial">
        <h3>Customer testimonials</h3>
        <div className="testimonial__cards-section">
          <BaseCard 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            personName="Jane Doe"
            company="Founder, X Company"
            personImage={JaneDoe}
            personTitle="Jane Doe"
          />
          <BaseCard 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            personName="John Doe"
            company="CEO, Y Company"
            personImage={JohnDoe}
            personTitle="John Doe"
          />
          <BaseCard 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
            personName="Bill Doe"
            company="Entrepreneur"
            personImage={BillDoe}
            personTitle="Bill Doe"
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
