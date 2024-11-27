import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Adminlogin({ showAlert,startLoader}) {
    const naviget=useNavigate()
    const [adminauth, setadminauth] = useState({ email: "", password: "" })
    const onchange = (e) => {
        setadminauth({ ...adminauth, [e.target.name]: e.target.value })
    }
    const handleclick = (e) => {
        e.preventDefault();
        console.log(process.env.admin_gamil)
        if (adminauth.email ==="admin1@gmail.com" && adminauth.password === "admin123") {
            showAlert("Admin login Successfully", "success");
            localStorage.setItem("admin-token","iamskrijwaniamadmin")
            startLoader()
            naviget("/mainadminpage")
        }
        else{
            showAlert("Invalid credential", "error");
        }



    }
    return (
        <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0f0e0e" }}>
            <div className="main" style={{ display: "flex", flexDirection: "column", color: "#00ff00", height: "350px" }}>
                <h1><center>Admin Login</center></h1>
                <form>
                    <div className=" my-2">
                        <input type="email" className='inputsize' style={{ outline: "none" }} value={adminauth.email} onChange={onchange} placeholder="email" id="name" name="email" required />
                        <lord-icon
                            src="https://cdn.lordicon.com/ozlkyfxg.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>
                    </div>
                    <div className="password my-2">
                        <input type="password" className='inputsize' placeholder="password" value={adminauth.password} onChange={onchange} style={{ outline: "none" }} id="pass" name="password" required />
                        <lord-icon
                            src="https://cdn.lordicon.com/fgxwhgfp.json"
                            trigger="hover"
                            colors="primary:#000000,secondary:#000000"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>
                    </div>
                    <div className="login" style={{ display: "flex", justifyContent: "center" }}>
                        <button disabled={adminauth.email===""?true:false} onClick={handleclick} className='btn btn-primary' type="submit" id="button">Admin Login</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
