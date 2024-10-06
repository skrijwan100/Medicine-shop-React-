import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
export default function Cart({ showAlert}) {
  const [order, setorder] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('auth-token')) {
      navigate("/login")
      showAlert("login or singup frist", "error")
    }
    const fecthorder = async () => {
      const url = `http://localhost:5000/api/order/fecthorder`
      const token = localStorage.getItem("auth-token")
      const reponce = await fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          'auth-token': token
        }
      })
      const data = await reponce.json();
      console.log(data.allorder)
      setorder(data.allorder)
    }

    fecthorder()
  }, [])
  const handleclick = async (e, id) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/order/deleteorder/${id}`
    const token = localStorage.getItem('auth-token')
    const responce = await fetch(url, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        'auth-token': token
      }
    })
    const data = await responce.json()
    // console.log(data.massage)
    showAlert("Suessfully delete", "success")
    navigate("/")
    setTimeout(() => {
      navigate("/cart")
    }, 400)
  }
  // const handlepayment=(e)=>{
  //   e.preventDefault();
  //   showmodal("Scan this and make your payment","../Asset/Scanner.jpeg")

  // }


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "30px", flexDirection: "column", backgroundColor:"black" }}>
      {order && order.length>0?(order.map((order, index) => (

        <div className="orderbox my-3" key={index}>
          <img src={order.ImgUrL} alt="img" style={{ width: "250px", height: "250px", borderRadius: "30px" }} />
          <div className="information" style={{ fontSize: "20px" }}>
            <strong>product name:</strong><span>{order.products}</span><br />
            <strong>quantity:</strong><span>{order.quantity}</span><br />
            <strong>Total Amount:</strong><span>{order.totalAmount}</span> <br />
            <button onClick={(e) => handleclick(e, order._id)} className='btn btn-danger my-3'>Delete Order</button>
            <button  className='btn btn-primary mx-3 my-3'>Online Payment </button>
          </div>

        </div>
      ))): <div style={{fontSize:"40px",color:"red"}}>No orders available.</div>}
    </div>
  )
}
