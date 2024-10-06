import React, { useEffect, useState } from 'react'
import img from "../Asset/doc3.jpg"

export default function Finddoctor() {
    const[doctor,setdoctor]=useState([])
    useEffect(()=>{
        const fecthalldoctor=async()=>{
            const url=`http://localhost:5000/api/doctor/fecthalldoctor`
            const responce= await fetch(url,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
                }

            })
            const data = await responce.json()
            console.log(data.alldoctor)
            setdoctor(data.alldoctor)

        }
        fecthalldoctor()
    },[])
  return (
    <>
    <div className='row'  style={{ backgroundColor:"#1f1e1e", color: "black",display:"flex", alignItems:"center", justifyContent:"center" }}>
        
    {doctor.map((doctor,index)=>(
        <div className='col-md-4 my-5 cardsize'  key={doctor.id || index} >
                        
       <div className="card hovercard" style={{ width: "18rem",background:"linear-gradient(90deg, #00EABD,#ff53b7)",cursor:"pointer"}}>
           <div className="card-header" style={{textAlign:"center",fontSize:"20px",color:"black",fontWeight:"bold"}}>{doctor.doctorspiclity} Specialist</div>
           <img src={doctor.ImgUrl} className="card-img-top" style={{height:"250px",width:"286px"}} alt="..." />
           <div className="card-body">
               <h4 className="card-title">{doctor.dname}</h4>
               <p className="card-text"><strong>Time: </strong>{doctor.availabletime} <br /> <strong>{`Fees: ${doctor.fees}`}</strong><br /></p>
              <button className='btn btn-warning'>Appointment</button>
           </div>
       </div>

   </div>
    ))}
    </div>
   
    </>
  )
}