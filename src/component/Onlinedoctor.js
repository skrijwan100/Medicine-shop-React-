import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onlinedoctor({showAlert}) {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate("/login")
      showAlert("login or singup frist","error")
    }

  },[])
  return (
    <div>
      <h1>Online srvice page</h1>
    </div>
  )
}
