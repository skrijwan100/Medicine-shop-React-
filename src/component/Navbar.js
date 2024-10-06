import React from 'react'
// import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export default function Navbar({ startLoader, showAlert, showmodal }) {
  const navigate = useNavigate()
  const handleclick = () => {
    startLoader()
  }

  const handlemodal = async () => {
    const url = `http://localhost:5000/api/userauth/getuser`
    const token = localStorage.getItem('auth-token')
    const responce = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      }
    })
    const data = await responce.json()
    console.log(data.massage.name)

    showmodal(`Hi ${data.massage.name} your information`, ` ${data.massage.email}`, `${data.massage.address}`, ` ${data.massage.phone}`)
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth-token")
    showAlert("Logout Successfully", "success")
  }
  let loction = useLocation()
  // useEffect(()=>{
  //   console.log(loction.pathname)
  // },[loction])
  return (
    <div>
      <nav className=" navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand tc-red" to="/" style={{ color: "#06ff06" }}>LIFE LINE SERVICE</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link onClick={loction.pathname === "/" ? null : handleclick} className={`nav-link ${loction.pathname === "/" ? "underline" : ""}`} aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link onClick={loction.pathname === "/finddoctor" ? null : handleclick} className={`nav-link ${loction.pathname === "/finddoctor" ? "underline" : ""}`} to="/finddoctor">FIND DOCTOR</Link>
              </li>
              <li className="nav-item">
                <Link onClick={loction.pathname === "/onlineservice" ? null : handleclick} className={`nav-link ${loction.pathname === "/onlineservice" ? "underline" : ""}`} to="/onlineservice">YOUR BOOKING</Link>
              </li>
              <li className="nav-item">
                <Link onClick={loction.pathname === "/cart" ? null : handleclick} className={`nav-link ${loction.pathname === "/cart" ? "underline" : ""}`} to="/cart">ORDER</Link>
              </li>
              <li className="nav-item">
                <Link onClick={loction.pathname === "/about" ? null : handleclick} className={`nav-link ${loction.pathname === "/about" ? "underline" : ""}`} to="/about">ABOUT US</Link>
              </li>
            </ul>
          </div>
          {!localStorage.getItem('auth-token') ? <div><Link to="/login"><button onClick={loction.pathname === "/login" ? null : handleclick} className='btn btn-primary mx-2'>Login</button></Link>
            <Link to="/singup">  <button onClick={loction.pathname === "/singup" ? null : handleclick} className='btn btn-primary'>Singup</button></Link></div> :<div style={{ display: "flex" }}><button onClick={logout} className='btn btn-primary'>logout</button> <div className="user mx-3" onClick={handlemodal}> <lord-icon
              src="https://cdn.lordicon.com/kdduutaw.json"
              trigger="hover"
              state="hover-looking-around"
              colors="primary:#00ff7e,secondary:#00ff7e"
              style={{ width: "25px", height: "25px", cursor: "pointer" }}>
            </lord-icon></div></div>}
        </div>
      </nav>
    </div>
  )
}
