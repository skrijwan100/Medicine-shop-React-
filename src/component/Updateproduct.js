import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import img from "../Asset/pad-40.jpg"
export default function Product({startLoader,showAlert}) {
    const naviget=useNavigate()
    const [product, setproduct] = useState([])
    useEffect(() => {
        const fecthallproduct = async (e) => {
            // e.preventDefault();
            const url = `http://localhost:5000/api/products/getallproducts`
            const responce = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await responce.json()
            console.log(data.allproducts)
            setproduct(data.allproducts)

        }

        fecthallproduct()
    }, [])
    const handledelete=async(e,id)=>{
      e.preventDefault();
      const url=`http://localhost:5000/api/products/deleteproduct/${id}`
      const token= localStorage.getItem("admin-token")
      const reponce = await fetch(url,{
        method:"DELETE",
        headers:{
          "Content-Type": "application/json",
          "admin-token": token,
        }
         
      })
      const data= await reponce.json()
      if(data){
        showAlert("Product Delete successful","success")
      }
      naviget("/home");
      setTimeout(()=>{
        naviget("/updatedelete")
      },300)

    }




    return (
        <>
            <div>

            {/* <img src={img}alt="" /> */}
            </div>
            <div className='row'  style={{ backgroundColor:"#0f0e0e", color: "black",display:"flex", alignItems:"center", justifyContent:"center" }}>
                {product.map((product, index) => (

                    <div className='col-md-4 my-5 cardsize'  key={product.id || index} >
                        
                        <div className="card hovercard" style={{ width: "18rem",background:"linear-gradient(90deg, #00bbff, #51dc24)",cursor:"pointer"}}>
                            <img src={product.ImgUrL} className="card-img-top" style={{height:"250px",width:"286px"}} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.pname}</h5>
                                <p className="card-text">{product.pdisc} <br /> <strong>pexpiryDate: </strong>{product.pexpiryDate} <br /> <strong>{`Prize: ${product.ppize}`}</strong><br /></p>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                <button className='btn btn-warning'>Update</button>
                                <button onClick={(e)=>handledelete(e,product._id)} className='btn btn-danger'>Delete</button>
                                </div>
                             
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </>

    )
}

