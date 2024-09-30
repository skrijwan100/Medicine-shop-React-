import React from 'react'
import Slidebar from './Slidebar'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import '../media.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import evion from "../Asset/evion.jpg"
import azee from "../Asset/azee-500.jpg"
import facewash from "../Asset/facewash.jpg"
import gelusil from "../Asset/gelusil.jpg"
import pad40 from "../Asset/pad-40.jpg"
import parasitamol from "../Asset/parasitamol.jpg"



export default function Home() {
  return (
    <>
      <div className=' d-flex justify-content-center align-items-center' style={{ backgroundColor: "#00ffcd", height: "70px" }}>
        <form action="">
          <input className='inputstyle' style={{ width: "35vw", height: "40px" }} type="text" placeholder='Scarch any medicine' />
        </form>
      </div>
    </>
  )
}
