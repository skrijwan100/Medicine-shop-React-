import React from 'react'
import Slidebar from './Slidebar'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import '../media.css'
import evion from "../Asset/evion.jpg"
import azee from "../Asset/azee-500.jpg"
import facewash from "../Asset/facewash.jpg"
import gelusil from "../Asset/gelusil.jpg"
import pad40 from "../Asset/pad-40.jpg"
import parasitamol from "../Asset/parasitamol.jpg"
import Product from './Product';
import Scarch from './Scarch';



export default function Home(props) {
  const{startLoader,showAlert}=props
  return (
    <>
     {/* <Scarch/> */}
     <Slidebar/>
      <Product startLoader={startLoader} showAlert={showAlert}/>
    </>
  )
}
