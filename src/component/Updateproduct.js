import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import img from "../Asset/pad-40.jpg"
export default function Product({startLoader,showAlert}) {
    const naviget=useNavigate()
    const [product, setproduct] = useState([])
    useEffect(() => {
        const fecthallproduct = async (e) => {
            const token = localStorage.getItem("admin-token")
            if(!token){
                naviget("/adminlogin")
                showAlert("Login frist","error")
            }
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
    const ref= useRef()
    const closeref =useRef()
    const [pdetiles,setpdetiles]=useState({id:"",pname:"",disc:"",expiryDate:"",prize:"",stock:""})
 const handleclick=(e,id,pname,disc,expiryDate,prize,stock)=>{
    e.preventDefault();
    console.log('click')
    ref.current.click()
    setpdetiles({id,pname,disc,expiryDate,prize,stock})
 }
const onchange=(e)=>{
    setpdetiles({...pdetiles,[e.target.name]:e.target.value})
}

const handleupdate=async (e)=>{
    e.preventDefault();
    const url =`http://localhost:5000/api/products/updateproduct/${pdetiles.id}`
    const token = localStorage.getItem("admin-token")
    const responce= await fetch(url,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "admin-token":token
        },
        body:JSON.stringify({pname:pdetiles.pname,pdisc:pdetiles.disc,pexpiryDate:pdetiles.expiryDate,ppize:pdetiles.prize,pstock:pdetiles.stock})

    })
    const data= await responce.json()
    if(data){
        showAlert("Product Update successful","success")
      }
      naviget("/home");
      setTimeout(()=>{
        naviget("/updatedelete")
      },200)
      closeref.current.click();

}


    return (
        <>
            <div>

            {/* <img src={img}alt="" /> */}
            </div>
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
        </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Product details:</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                          
                        <div className="modal-body" style={{ display: "flex", flexDirection: "column", }}>
                                 
                            <input name='pname' className='my-2' style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }}  type="text" placeholder='Enter Product name ' value={pdetiles.pname} onChange={onchange}   required/>

                            <input name='disc' className='my-2' style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }}  type="text" placeholder='Enter product discription ' value={pdetiles.disc} onChange={onchange}   required/>

                            <input name='expiryDate' type="text" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }}  className='my-2' placeholder='Enter expiryDate (dd-mm-yy)'  value={pdetiles.expiryDate} onChange={onchange} required />

                            <input name='prize' type="number" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} className='my-2' placeholder='Enter prize' value={pdetiles.prize} onChange={onchange} required />

                            <input name='stock' type="number" style={{ height: "40px", borderRadius: "10px", border: "2px solid #00b7ff", paddingLeft: "10px", outline: "none" }} className='my-2' placeholder='Enter stock' value={pdetiles.stock} onChange={onchange} required />
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={closeref} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleupdate}   className="btn btn-warning">Update</button>
                        </div>
                            
                    </div>
                </div>
            </div>
            <div className='row'  style={{ backgroundColor:"#0f0e0e", color: "black",display:"flex", alignItems:"center", justifyContent:"center" }}>
                {product.map((product, index) => (

                    <div className='col-md-4 my-5 cardsize'  key={product.id || index} >
                        
                        <div className="card hovercard" style={{ width: "18rem",background:"linear-gradient(90deg, #00bbff, #51dc24)",cursor:"pointer"}}>
                            <img src={product.ImgUrL} className="card-img-top" style={{height:"250px",width:"286px"}} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.pname}</h5>
                                <p className="card-text">{product.pdisc} <br /> <strong>ExpiryDate: </strong>{product.pexpiryDate} <br /> <strong>{`Prize: ${product.ppize}`}</strong><br /><strong>Stock: </strong>{product.pstock}</p>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                <button onClick={(e)=>handleclick(e,product._id,product.pname,product.pdisc,product.pexpiryDate,product.ppize,product.pstock)} className='btn btn-warning'>Update</button>
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

