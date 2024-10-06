import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onlinedoctor({showAlert}) {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate("/login")
      showAlert("login or singup frist","error")
    }
    const fecthbook= async()=>{
      const url= `http://localhost:5000/api/doctorbook/fecthbook`
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
    }
    fecthbook()
  },[])
  return (
    <div>
      <h1>YOUR BOOK DOCTOR</h1>
    </div>  
  )
}
