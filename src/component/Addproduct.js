import React, { useEffect, useState } from 'react'

export default function Addproduct({showAlert}) {

    useEffect(()=>{
        const token= localStorage.getItem("admin-token")
        if(!token){
          showAlert("Need admin login","error")
          naviget("/adminlogin")
        }
    
      },[])
    const [product, setproduct] = useState({ pname: "", prize: "", stock: "", expiryDate: "", disc: "", ImgUrL: "" })
    const onchange = (e) => {
        setproduct({ ...product, [e.target.name]: e.target.value })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const url =`http://localhost:5000/api/products/addproducts`
       const token = localStorage.getItem("admin-token")
    //    console.log(token)
        const responce=await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                "admin-token":token,
            },
            body:JSON.stringify({pname:product.pname,ppize:product.prize,pstock:product.stock,pexpiryDate:product.expiryDate,pdisc:product.disc,ImgUrL:product.ImgUrL})
        })
        const data= await responce.json()
        // console.log(data)
        if(data){

            showAlert("Product add Successfull","success")
        }

    }

    
    return (
        <div style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#0f0e0e" }}>
            <div className="main" style={{ display: "flex", flexDirection: "column", color: "rgb(0 37 255)", height: "450px",background: "linear-gradient(90deg, #438097, #dcda24)" }}>
                <h1><center>Add Product</center></h1>
                <form onSubmit={handlesubmit} >
                    <div className=" my-2">
                        <input type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter product name" name="pname" value={setproduct.pname} onChange={onchange} required />
                        <lord-icon
                            src="https://cdn.lordicon.com/ggirntso.json"
                            trigger="loop"
                            delay="1500"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>


                    </div>

                    <div className=" my-2">
                        <input type="number" className='inputsize' style={{ outline: "none" }} placeholder="Enter product prize" name="prize" value={setproduct.prize} onChange={onchange} required />
                        <lord-icon
                            src="https://cdn.lordicon.com/bsdkzyjd.json"
                            trigger="loop"
                            delay="1500"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>

                    </div>
                    <div className="password my-2">
                        <input type="number" className='inputsize' placeholder="Enter stock of the product" style={{ outline: "none" }} name="stock" value={setproduct.stock} onChange={onchange} required minLength={5} />
                        <lord-icon
                            src="https://cdn.lordicon.com/ytklkgsc.json"
                            delay="1500"
                            trigger="loop"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>

                    </div>
                    <div className="password my-2">
                        <input type="text" className='inputsize' placeholder="Expeiry date (dd-mm-yyyy)" style={{ outline: "none" }} name="expiryDate"  onChange={onchange} value={setproduct.expiryDate} required   />

                    </div>
                    <div className=" my-2">
                        <input type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter product discription" name="disc" value={setproduct.disc} onChange={onchange} required minLength={7} />


                    </div>
                    <div className="my-2">
                        <input type="text" className='inputsize' style={{ outline: "none" }} placeholder="Enter img url" name="ImgUrL" value={setproduct.ImgUrL} onChange={onchange} required minLength={10} />
                        <lord-icon
                            src="https://cdn.lordicon.com/rszslpey.json"
                            trigger="loop"
                            delay="1500"
                            style={{ width: "25px", height: "25px", marginLeft: "-28px", paddingTop: "4px", cursor: "pointer" }}>
                        </lord-icon>

                    </div>
                    <div className="login" style={{ display: "flex", justifyContent: "center" }}>
                        <button className='btn btn-primary' type="submit" >Add</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
