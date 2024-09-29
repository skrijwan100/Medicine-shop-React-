import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const navigate=useNavigate()
  useEffect(()=>{
    if(!localStorage.getItem('auth-token')){
      navigate("/login")
      alert("login frist")
    }

  },[])
 
  return (
    <div>
      <h2>This is oredr</h2>
    </div>
  )
}
