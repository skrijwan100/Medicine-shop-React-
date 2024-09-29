import React from 'react'
// import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Navbar() {
  const navigate=useNavigate()

  const logout=()=>{
    localStorage.removeItem("auth-token")
    navigate("/login")
  }
  let loction =useLocation()
  // useEffect(()=>{
  //   console.log(loction.pathname)
  // },[loction])
  return (    
    <div>
<nav className=" navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand tc-red" to="/" style={{color:"#06ff06"}}>LIFE LINE SERVICE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${loction.pathname==="/"?"underline":""}`} aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item ">
          <Link className={`nav-link ${loction.pathname==="/offer"?"underline":""}`} to="/offer">OFFER</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${loction.pathname==="/onlineservice"?"underline":""}`} to="/onlineservice">ONLINE DOCTOR</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${loction.pathname==="/cart"?"underline":""}`} to="/cart">ORDER</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${loction.pathname==="/about"?"underline":""}`} to="/about">ABOUT US</Link>
        </li>
      </ul>
    </div>
   {!localStorage.getItem('auth-token')?<div><Link to="/login"><button className='btn btn-primary mx-2'>Login</button></Link>
   <Link to="/singup">  <button className='btn btn-primary'>Singup</button></Link></div>: <button  onClick={logout} className='btn btn-primary'>logout</button>}
  </div>
</nav>
    </div>
  )
}
