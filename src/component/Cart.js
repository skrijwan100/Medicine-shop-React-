import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
export default function Cart({showAlert}) {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate("/login")
      showAlert("login or singup frist","error")
    }
    

  },[])
 
  return (
    <div>
      <h2>This is oredr</h2>
    </div>
  )
}
