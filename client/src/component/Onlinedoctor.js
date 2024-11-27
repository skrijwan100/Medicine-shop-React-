import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import img from "../Asset/doc1.jpg"
// import img1 from "../Asset/doc2.png"
// import img2 from "../Asset/doc3.jpg"

export default function Onlinedoctor({showAlert,showpymentmodal}) {
  const[doctor,setdoctor]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate("/login")
      showAlert("login or singup frist","error")
    }
    const fecthbook= async()=>{
      const url= `${process.env.REACT_APP_backend_url}/api/doctorbook/fecthbook`
      const token=localStorage.getItem("auth-token")
      const responce = await fetch(url,{
        method:'POST',
        headers:{
          "Content-Type": "application/json",
          "auth-token":token
        }
      })
      const data = await responce.json()
      console.log(data.findallbook)
      setdoctor(data.findallbook)
    }
    fecthbook()
  },[])
  const hendleclick=async(e,id)=>{
    e.preventDefault();
    const url= `${process.env.REACT_APP_backend_url}/api/doctorbook/deletebooking/${id}`
    const token = localStorage.getItem('auth-token')
    const responce= await fetch(url,{
      method:'DELETE',
      headers:{
        "Content-Type":"application/json",
        "auth-token":token
      }
    })
    const data= await responce.json()
    console.log(data)
    showAlert("Appointment delete successfully.","success")
    navigate("/home")
    setTimeout(() => {
      navigate("/onlineservice")
    }, 300);  
  }
  const showscanner=(e)=>{
    e.preventDefault();
    showpymentmodal("Scann and pay")


  }
  return (
    <>
    {/* <img className='d-none' src={img} alt="" />
        <img  className='d-none'  src={img1} alt="" />
        <img  className='d-none' src={img2} alt="" /> */}
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "30px", flexDirection: "column", backgroundColor:"black",   height: "max-content"}}>
      {doctor && doctor.length>0?(doctor.map((doctor, index) => (
        
        <div className="orderbox responce my-3" key={index}>
          <img src={doctor.ImgUrl} alt="img" style={{ width: "250px", height: "250px", borderRadius: "30px" }} />
          <div className="information" style={{ fontSize: "20px" }}>
            <strong>Doctor name:</strong> {doctor.dname} <br />
            <strong>Doctor spiclity:</strong> {doctor.doctorspiclity} <br />
            <strong>Doctor fees:</strong> {doctor.dcotorfees} <br />
            <strong>patient name:</strong> {doctor.patientname} <br />
            <strong>patient age:</strong> {doctor.patientage} <br />
            <button onClick={(e)=>hendleclick(e,doctor._id)} className='btn btn-danger my-2'>Delete Appointment</button> <br />
            <button onClick={showscanner} className='btn btn-success '>Online payment</button>

          </div>

        </div>
      ))): <div style={{fontSize:"40px",color:"red",height:"76.7vh"}}>No Appointment</div>}
    </div>
      
      </>
  )
}
