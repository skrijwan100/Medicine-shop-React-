import React from 'react'
import Slidebar from './Slidebar'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import evion from "../Asset/evion.jpg"
import azee from "../Asset/azee-500.jpg"
import facewash from "../Asset/facewash.jpg"
import gelusil from "../Asset/gelusil.jpg"
import pad40 from "../Asset/pad-40.jpg"
import parasitamol from "../Asset/parasitamol.jpg"



export default function Home() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
      <div className=' d-flex justify-content-center align-items-center' style={{ backgroundColor: "#00ffcd", height: "70px" }}>
        <form action="">
          <input className='inputstyle' style={{ width: "35vw", height: "40px" }} type="text" placeholder='Scarch any medicine' />
        </form>
      </div>
      <div className="containr" style={{width:"100vw"}}>

      <Slidebar />
      </div>
      <div className="container my-5">
        <h3>Top Categories</h3>
        <hr />
        <AutoplaySlider 
           play={true}
           cancelOnInteraction={false} // should stop playing on user interaction
           interval={2000}
        style={{ height: "400px" }}>
          <div className="my-5 d-flex">
            <div className="box mx-2 d-flex justify-content-center row d-flex justify-content-center row">
               <img className='slideimg' style={{ height: "200px",width: "300px"}} src={evion} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
               <img className='slideimg' style={{ height: "200px",width: "300px"}} src={pad40} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
               <img className='slideimg' style={{ height: "200px",width: "300px"}} src={azee} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100 <br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
               <img className='slideimg' style={{ height: "200px",width: "300px"}} src={gelusil} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>

          </div>
          <div className="my-5 d-flex">
            <div className="box mx-2 d-flex justify-content-center row">
              <img className='slideimg' style={{ height: "200px",width: "300px"}} src={facewash} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={parasitamol} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={azee} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={pad40} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>

          </div>

          <div className="my-5 d-flex">
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={parasitamol} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={gelusil} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={evion} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>
            <div className="box mx-2 d-flex justify-content-center row">
            <img className='slideimg' style={{ height: "200px",width: "300px"}} src={facewash} alt="" />
               <button className=" btn btn-info my-2 " style={{width:"130px"}}>₹100<br/>Add to cart</button>
            </div>

          </div>
        </AutoplaySlider>
      </div>

    </>
  )
}
