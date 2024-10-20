import React, { useEffect, useRef, useState } from 'react'
import img from "../Asset/doc1.jpg"
import img1 from "../Asset/doc2.png"
import img2 from "../Asset/doc3.jpg"
import { useNavigate } from 'react-router-dom'

export default function Upadtedeldoctor({showAlert}) {
    const [doctor, setdoctor] = useState([])
    const naviget= useNavigate()
    useEffect(() => {
        const fecthalldoctor = async () => {
            const url = `http://localhost:5000/api/doctor/fecthalldoctor`
            const responce = await fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                }

            })
            const data = await responce.json()
            console.log(data.alldoctor)
            setdoctor(data.alldoctor)

        }
        fecthalldoctor()
    }, [])
   
    const handledelete=async(e,id)=>{
      const url=`http://localhost:5000/api/doctor/deletedoctor/${id}`
      const token= localStorage.getItem("admin-token")
      const responce = await fetch(url,{
        method:'DELETE',
        headers:{
          "Content-Type": "application/json",
          "admin-token":token,

        }
      })
      const data = await responce.json()
      if(data){
        showAlert("doctor Delete successful","success")
      }
      naviget("/home")
      setTimeout(()=>{
        naviget("/updatedeletedoctor")
      },300)

    }

    return (
        <>
        <img className='d-none' src={img} alt="" />
        <img  className='d-none'  src={img1} alt="" />
        <img  className='d-none' src={img2} alt="" />
            <div className='row' style={{  color: "black", display: "flex", alignItems: "center", justifyContent: "center" }}>

                {doctor.map((doctor, index) => (
                    <div className='col-md-4 my-5 cardsize' key={doctor.id || index} >

                        <div className="card hovercard" style={{ width: "18rem", background: "linear-gradient(90deg, #00EABD,#ff53b7)", cursor: "pointer", }}>
                            <div className="card-header" style={{ textAlign: "center", fontSize: "20px", color: "black", fontWeight: "bold" }}>{doctor.doctorspiclity} Specialist</div>
                            <img src={doctor.ImgUrl} className="card-img-top" style={{ height: "250px", width: "286px" }} alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">{doctor.dname}</h4>
                                <p className="card-text"><strong>Time: </strong>{doctor.availabletime} <br /> <strong>{`Fees: ${doctor.fees}`}</strong><br /></p>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                <button className='btn btn-warning'>Update</button>
                                <button onClick={(e)=>handledelete(e,doctor._id)} className='btn btn-danger'>Delete</button>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </>
    )
}
