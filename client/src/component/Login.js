import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
    const{showAlert}=props
    const navigate= useNavigate()
    const [userauth,setuserauth]=useState({email:"",password:""})

    const onchange=(e)=>{
        setuserauth({...userauth,[e.target.name]:e.target.value})

    }
    const handleclick = async(e)=>{
        e.preventDefault();
        const url = `http://localhost:5000/api/userauth/login`
       const responce = await fetch(url,{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email:userauth.email,password:userauth.password})
       })
       const data = await responce.json()
       console.log(data)
       if(data.massage=="Successfully"){
        localStorage.setItem('auth-token',data.authtoken)
        showAlert("Login Successfully","success")
        navigate("/")

       }
       else{
        showAlert(`${data.massage}`,"error")
       }

    }
  return (
    <div style={{height:"500px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#0f0e0e"}}>
    <div className="main" style={{display:"flex",flexDirection:"column",color:"#00ff00",height: "350px"}}>
        <h1><center>Login</center></h1>
        <form onSubmit={handleclick}>
            <div className=" my-2">
                <input type="email" className='inputsize' style={{outline:"none"}} value={setuserauth.email} onChange={onchange} placeholder="email" id="name" name="email" required />
                <lord-icon
                            src="https://cdn.lordicon.com/ozlkyfxg.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                </lord-icon>
            </div>
            <div className="password my-2">
                <input type="password" className='inputsize' placeholder="password" value={setuserauth.password} onChange={onchange}  style={{outline:"none"}} id="pass" name="password" required />
                <lord-icon
                            src="https://cdn.lordicon.com/fgxwhgfp.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                </lord-icon>
            </div> 
            <div className="login" style={{display:"flex", justifyContent:"center"}}>
                <button className='btn btn-primary' type="submit" id="button">Login</button>
            </div>
        </form>

    </div>
    </div>
  )
}
