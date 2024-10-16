import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Mainadminpage({startLoader,showAlert}) {
  const naviget=useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("admin-token")
    if(!token){
      showAlert("Login Frist","error")
      naviget("/adminlogin")
    }
  },[])
  const addproduct=(e)=>{
    e.preventDefault();
    startLoader()
    naviget("/addproduct")

  }
  return (
    <div className='mainadmin' style={{display:"flex",flexDirection:"column", flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100vw",}}>
     <div className="row-1" style={{display:'flex',flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
      <div className='adminbox mx-3 my-3'><button onClick={addproduct} className='addbtn'>Add product</button></div>
      <div className='adminbox mx-3 my-3'><button className='updatebtn'>Update product</button></div>
      <div className='adminbox mx-3 my-3'><button className='btn btn-danger'>Delete product</button></div>
     </div>
     <div className="row-2" style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
     <div className='adminbox mx-3 my-3'><button className='addbtn'>Add Doctor</button></div>
      <div className='adminbox mx-3 my-3'><button className='updatebtn'>Update Doctor</button></div>
      <div className='adminbox mx-3 my-3'><button className='btn btn-danger'>Delete Doctor</button></div>
    </div>
    </div>
  )
}
