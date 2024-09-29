import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import slide1 from "../Asset/slide1.png"
import slide2 from "../Asset/slide2.png"
import slide3 from "../Asset/slide3.png"
import slide4 from "../Asset/slide4.png"

export default function Slidebar() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className='d-flex justify-content-center'style={{height:"350px",width:"100vw"}}>

    <AutoplaySlider animation="cubeAnimation"
     play={true}
     cancelOnInteraction={false} // should stop playing on user interaction
     interval={3000}>
         <div style={{height:"380px",width:"100vw"}}  data-src={slide1} />
         <div style={{height:"380px",width:"100vw"}}  data-src={slide2} />
         <div style={{height:"380px",width:"100vw"}}  data-src={slide3} />
         <div style={{height:"380px",width:"100vw"}}  data-src={slide4} />
   

    </AutoplaySlider>
      </div>
  )
}