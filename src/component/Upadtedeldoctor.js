import React, { useEffect, useRef, useState } from 'react'
import img from "../Asset/doc1.jpg"
import img1 from "../Asset/doc2.png"
import img2 from "../Asset/doc3.jpg"
import { useNavigate } from 'react-router-dom'

export default function Upadtedeldoctor({showAlert}) {
    const [doctor, setdoctor] = useState([])
    const [doctordetiles,setdoctordetiles]=useState({Spiclity:"",dname:"",time:"",fees:""})
    const naviget= useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("admin-token")
    if(!token){
      showAlert("Login Frist","error")
      naviget("/adminlogin")
    }
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
    const ref=useRef()
    const refclose=useRef()
    const handleclick=(e,id,Spiclity,dname,time,fees)=>{
        e.preventDefault();
        setdoctordetiles({id,Spiclity,dname,time,fees})
        ref.current.click();
        
    }
    const onchange=(e)=>{
     setdoctordetiles({...doctordetiles,[e.target.name]:e.target.value})
    }
  
    const handleupdate=async(e)=>{
        e.preventDefault();
       const  url=`http://localhost:5000/api/doctor/updatedoctor/${doctordetiles.id}`
        const token= localStorage.getItem("admin-token")
        const responce= await fetch(url,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json",
                "admin-token":token
            },
            body:JSON.stringify({dname:doctordetiles.dname,doctorspiclity:doctordetiles.Spiclity,availabletime:doctordetiles.time,fees:doctordetiles.fees})
        })
        const data= await responce.json()
        if(data){
            showAlert("doctor update successful","success")

        }
        naviget("/home")
        setTimeout(()=>{
            naviget("/updatedeletedoctor")
        },200)

     refclose.current.click();
    }

    

    return (
        <>
        <img className='d-none' src={img} alt="" />
        <img  className='d-none'  src={img1} alt="" />
        <img  className='d-none' src={img2} alt="" />
        <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
        </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update doctor details:</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          
                        <div className="modal-body" style={{ display: "flex", flexDirection: "column", }}>
                                 
                            <input name='Spiclity' className='my-2' style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} onChange={onchange} value={doctordetiles.Spiclity} type="text" placeholder='Enter Spiclity '   required/>

                            <input name='dname' className='my-2' style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} onChange={onchange} value={doctordetiles.dname} type="text" placeholder='Enter name'   required/>

                            <input name='time' type="text" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} onChange={onchange} value={doctordetiles.time} className='my-2' placeholder='Enter time'  required />

                            <input name='fees' type="number" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} onChange={onchange} value={doctordetiles.fees} className='my-2' placeholder='Enter doctor fees' required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleupdate} className="btn btn-warning">Update</button>
                        </div>
                            
                    </div>
                </div>
            </div>
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
                                <button onClick={(e)=>handleclick(e,doctor._id,doctor.doctorspiclity,doctor.dname,doctor.availabletime,doctor.fees)}className='btn btn-warning'>Update</button>
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
