import React, { useEffect, useRef, useState } from 'react'
import img from "../Asset/doc1.jpg"
import img1 from "../Asset/doc2.png"
import img2 from "../Asset/doc3.jpg"

export default function Finddoctor({showAlert}) {
    const [doctor, setdoctor] = useState([])
    const [patient, setpatient] = useState({ pname: "", age: "" })
    const [selectdoctor, setselectdoctor] = useState(null)
    useEffect(() => {
        const fecthalldoctor = async () => {
            const url = `${process.env.REACT_APP_backend_url}/api/doctor/fecthalldoctor`
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
    const ref = useRef(null)
    const refclose = useRef(null)
    const handleclick = (e, dname, doctorspiclity,ImgUrl) => {
        e.preventDefault();
        setselectdoctor({ dname, doctorspiclity ,ImgUrl})
        ref.current.click()

    }
    const completeappoinetment = async(e) => {
        e.preventDefault();
        if (selectdoctor) {
            const url=`${process.env.REACT_APP_backend_url}/api/doctorbook/addbook`
            const token= localStorage.getItem('auth-token')
            const responce= await fetch(url,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    "auth-token":`${token}`

                },
                body:JSON.stringify({dname:selectdoctor.dname,doctorspiclity:selectdoctor.doctorspiclity,patientname:patient.pname,patientage:patient.age,ImgUrl:selectdoctor.ImgUrl})
            })
            const data= await responce.json()
            if(data){
                showAlert("Appointment Complete","success")
                refclose.current.click()


            }
            setpatient({ pname: "", age: "" });
            setselectdoctor(null);
        } else {
            showAlert("No doctor selected","error");
        }

    }

    const onchange = (e) => {

        setpatient({ ...patient, [e.target.name]: e.target.value })
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
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Patient details:</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          
                        <div className="modal-body" style={{ display: "flex", flexDirection: "column", }}>
                                 
                            <input name='pname' className='my-2' style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} type="text" placeholder='Enter patient name' value={patient.pname} onChange={onchange}  required/>
                            <input name='age' type="number" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} className='my-2' placeholder='Enter patient age' value={patient.age} onChange={onchange} required />
                            <input type="text" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} className='my-2' placeholder='Enter patient Gender' required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refclose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button"   disabled={!patient.pname || !patient.age} onClick={(e) => completeappoinetment(e)} className="btn btn-primary">Complete Appointment</button>
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
                                <button onClick={(e) => handleclick(e, doctor.dname, doctor.doctorspiclity,doctor.ImgUrl)} className='btn btn-warning'>Appointment</button>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </>
    )
}
