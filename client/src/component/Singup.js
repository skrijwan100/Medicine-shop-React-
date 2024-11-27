import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Singup(props) {
    const { showAlert } = props;
    const navigate = useNavigate()
    const [userauth, setuserauth] = useState({ username: "", email: "", password: "", address: "", phone: "" })

    const onchange = (e) => {
        setuserauth({ ...userauth, [e.target.name]: e.target.value })
    }
    const handleclick = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/api/userauth/register`
        const responce = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: userauth.username, email: userauth.email, password: userauth.password, address: userauth.address, phone: userauth.phone })
        })
        const data = await responce.json()
        console.log(data)
        if (data.user == "Successfully") {
            localStorage.setItem('auth-token', data.authtoken)
            navigate("/")
            showAlert("Singup Successful", "success")

        }
        else {

            showAlert("Email is allready exist", "error")
        }




    }
    return (
        <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#0f0e0e" }}>
            <div className="main" style={{ display: "flex", flexDirection: "column", color: "#00ff00", height: "450px" }}>
                <h1><center>Singup</center></h1>
                <form onSubmit={handleclick}>
                    <div className=" my-2">
                        <input type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter your name" name="username" value={setuserauth.username} onChange={onchange} required />
                        <lord-icon
                            src="https://cdn.lordicon.com/kdduutaw.json"
                            trigger="hover"
                            state="hover-looking-around"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>

                    </div>

                    <div className=" my-2">
                        <input type="email" className='inputsize' style={{ outline: "none" }} placeholder="email" name="email" value={setuserauth.email} onChange={onchange} required />
                        <lord-icon
                            src="https://cdn.lordicon.com/ozlkyfxg.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>
                    </div>
                    <div className="password my-2">
                        <input type="password" className='inputsize' placeholder="password" style={{ outline: "none" }} name="password" value={setuserauth.password} onChange={onchange} required minLength={5} />
                        <lord-icon
                            src="https://cdn.lordicon.com/fgxwhgfp.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>
                    </div>
                    <div className="password my-2">
                        <input type="password" className='inputsize' placeholder="Renter the password" style={{ outline: "none" }} name="pass" required minLength={5} />
                        <lord-icon
                            src="https://cdn.lordicon.com/fgxwhgfp.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>
                    </div>
                    <div className=" my-2">
                        <input type="text" className='inputsize' style={{ outline: "none" }} placeholder="Address" name="address" value={setuserauth.address} onChange={onchange} required minLength={7} />
                        <lord-icon
                            src="https://cdn.lordicon.com/onmwuuox.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>

                    </div>
                    <div className="my-2">
                        <input type="number" className='inputsize' style={{ outline: "none" }} placeholder="phone number" name="phone" value={setuserauth.phone} onChange={onchange} required minLength={10} />

                    </div>
                    <div className="login" style={{ display: "flex", justifyContent: "center" }}>
                        <button className='btn btn-primary' type="submit" >Singup</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
