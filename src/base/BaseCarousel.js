import React from 'react'
import CarouselImage1 from '../assets/images/projects-image-3.png'
import CarouselImage2 from '../assets/images/projects-image-2.png'


function BaseCarousel() {
  return (
    <div class="carousel slide our-projects__image-section" data-ride="carousel">
      <div class="carousel-inner our-projects__image-section__carousel-inner">
        <div class="carousel-item active our-projects__image-section__carousel-inner--carousel-item">
          <div class="our-projects__image-section__carousel-inner--carousel-item--row">
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--1">
              <a href="#">
                <img src={CarouselImage1} alt="project image"/>
              </a>
            </div>
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--2">
              <a href="#">
                <img src={CarouselImage2} alt="project image"/>
              </a>
            </div>
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--3">
              <a href="#">
                <img src={CarouselImage1} alt="project image"/>
              </a>
            </div>
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--4">
              <a href="#">
                <img src={CarouselImage2} alt="project image"/>
              </a>
            </div>
          </div>
        </div>
        <div class="carousel-item our-projects__image-section__carousel-inner--carousel-item">
          <div class="our-projects__image-section__carousel-inner--carousel-item--row">
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--5">
              <a href="#">
                <img src={CarouselImage1} alt="project image"/>
              </a>
            </div>
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--6">
              <a href="#">
                <img src={CarouselImage2} alt="project image"/>
              </a>
            </div>
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--7">
              <a href="#">
                <img src={CarouselImage1} alt="project image"/>
              </a>
            </div>
            <div class="col-6 col-md-3 our-projects__image-section__image-wrapper our-projects__image-section__image-wrapper--8">
              <a href="#">
                <img src={CarouselImage2} alt="project image"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default BaseCarousel