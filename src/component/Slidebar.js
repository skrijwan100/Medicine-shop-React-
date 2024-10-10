import React, { useRef } from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import slide1 from "../Asset/slide1.png"
import slide2 from "../Asset/slide2.png"
import slide3 from "../Asset/slide3.png"
import slide4 from "../Asset/slide4.png"

export default function Slidebar() {

  return (
    <div id="carouselExampleAutoplaying" class="carousel  carousel-dark slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={slide1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={slide2} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={slide3} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}