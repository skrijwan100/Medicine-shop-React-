import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adddoctor({showAlert}) {
  const naviget=useNavigate()
  useEffect(()=>{
    const token= localStorage.getItem("admin-token")
    if(!token){
      showAlert("Need admin login","error")
      naviget("/adminlogin")
    }

  },[])
  const [doctor,setdoctor]=useState({dname:"",Spiclity:"",time:"",fees:"",ImgUrL:""})
  const onchnage=(e)=>{
    setdoctor({ ...doctor, [e.target.name]:e.target.value})
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const url=`${process.env.REACT_APP_backend_url}/api/doctor/adddoctor`
   const token= localStorage.getItem("admin-token")
   const responce= await fetch (url,{
    method:"POST",
    headers:{
     "Content-Type": "application/json",
     "admin-token":token,
    },
    body:JSON.stringify({dname:doctor.dname,doctorspiclity:doctor.Spiclity,availabletime:doctor.time,fees:doctor.fees,ImgUrl:doctor.ImgUrL})
   })
   const data= await responce.json()
   if(data){
    showAlert("doctor add successful","success")
   }

  }
  return (
    <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0f0e0e" }}>
    <div className="main" style={{ display: "flex", flexDirection: "column", color: "rgb(0 37 255)", height: "450px",background: "linear-gradient(90deg, rgb(0 255 120), rgb(137 255 0))" }}>
        <h1><center>Add Doctor</center></h1>
        <form onSubmit={handlesubmit} >
            <div className=" my-2">
                <input onChange={onchnage} type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter Doctor name" name="dname" required value={doctor.dname}  />
                <lord-icon
                    src="https://cdn.lordicon.com/kdduutaw.json"
                    trigger="loop"
                    state="hover-looking-around"
                    delay="1500"
                    style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                </lord-icon>


            </div>
            <div className=" my-2">
                <input onChange={onchnage} type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter doctor Spiclity" name="Spiclity"  value={doctor.Spiclity} required/>
                <lord-icon
                    src="https://cdn.lordicon.com/kdduutaw.json"
                    trigger="loop"
                    state="hover-looking-around"
                    delay="1500"
                    style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                </lord-icon>


            </div>

            <div className=" my-2">
                <input onChange={onchnage} type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter doctor available time" name="time" value={doctor.time}  required/>


            </div>

            <div className=" my-2">
                <input onChange={onchnage} type="number" className='inputsize' style={{ outline: "none" }} placeholder="Enter Doctor fees" name="fees" value={doctor.fees}  required />
                <lord-icon
                    src="https://cdn.lordicon.com/bsdkzyjd.json"
                    trigger="loop"
                    delay="1500"
                    style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                </lord-icon>

            </div>
            <div className="my-2">
                <input onChange={onchnage} type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter img url" name="ImgUrL"  required value={doctor.ImgUrL}  minLength={10} />
                <lord-icon
                    src="https://cdn.lordicon.com/rszslpey.json"
                    trigger="loop"
                    delay="1500"
                    style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                </lord-icon>

            </div>
            <div className="login" style={{ display: "flex", justifyContent: "center" }}>
                <button className='btn btn-primary' type="submit" >Add Doctor</button>
            </div>
        </form>

    </div>
</div>
  )
}
