import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import img from "../Asset/pad-40.jpg"
export default function Product({startLoader,showAlert}) {
    const naviget=useNavigate()
    const [quantities, setQuantities] = useState([]);

    const handleclick= async(e,pname,quantity)=>{
        e.preventDefault();
        console.log(pname)
        if(!localStorage.getItem('auth-token')){
            startLoader()
            showAlert("Login or Singup frist",'error')
            naviget("/login")
            return;
        }
        const url=`${process.env.REACT_APP_backend_url}/api/order/addorder`;
        const token=localStorage.getItem('auth-token')
        try {
            
      
        const reponce=await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type": "application/json",
                "auth-token":token,
            },
            body: JSON.stringify({products:pname,quantity:quantity})

        })
        const data=  await reponce.json()
        showAlert("order place successfully","success")
        console.log(data)
    } catch (error) {
            console.log(error)
    }

        naviget("/cart")
    }
    const [product, setproduct] = useState([])
    useEffect(() => {
        const fecthallproduct = async (e) => {
            // e.preventDefault();
            const url = `${process.env.REACT_APP_backend_url}/api/products/getallproducts`
            const responce = await fetch(url, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                }
            })
            const data = await responce.json()
            setQuantities(new Array(data.allproducts.length).fill(1));  
            console.log(data.allproducts)
            setproduct(data.allproducts)

        }

        fecthallproduct()
    }, [])

    const increaseQuantity = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] += 1; // Increase quantity
            return newQuantities;
        });
    };

    const decreaseQuantity = (index) => {
        setQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            if (newQuantities[index] > 0) {
                newQuantities[index] -= 1; // Decrease quantity, ensure it doesn't go below 0
            }
            return newQuantities;
        });
    };
const adminpage=()=>{
    startLoader()
    naviget("/adminlogin")
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
                                <p className="card-text">{product.pdisc} <br /> <strong>ExpiryDate: </strong>{product.pexpiryDate} <br /> <strong>{`Prize: ${product.ppize}`}</strong><br /><strong>quantity:</strong><button  onClick={() => decreaseQuantity(index)} className='btn btn-danger'>-</button><span className='mx-2' style={{fontSize:"22px"}}>{quantities[index]}</span><button onClick={() => increaseQuantity(index)} className='btn btn-light'>+</button></p>
                               <button onClick={(e)=>handleclick(e,product.pname,quantities[index])} className='btn btn-warning'>Place Order</button>
                            </div>
                        </div>

                    </div>
                ))}
                <footer style={{display:"flex",justifyContent:"center"}}> <button onClick={adminpage} className='btn btn-primary my-2'>Admin login</button></footer>
            </div>
        </>

    )
}
