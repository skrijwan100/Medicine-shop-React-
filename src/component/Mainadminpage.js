import React from 'react'

export default function Mainadminpage({startLoader}) {
  return (
    <div className='mainadmin' style={{display:"flex",flexDirection:"column", flexWrap:"wrap",alignItems:"center",justifyContent:"center",width:"100vw",}}>
     <div className="row-1" style={{display:'flex',flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
      <div className='adminbox mx-3 my-3'><button className='btn btn-primary'>hiii</button></div>
      <div className='adminbox mx-3 my-3'><button className='btn btn-primary'>hiii</button></div>
      <div className='adminbox mx-3 my-3'><button className='btn btn-primary'>hiii</button></div>
     </div>
     <div className="row-2" style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
      <div className='adminbox mx-3 my-3'><button className='btn btn-primary'>hiii</button></div>
      <div className='adminbox mx-3 my-3'><button className='btn btn-primary'>hiii</button></div>
      <div className='adminbox mx-3 my-3'><button className='btn btn-primary'>hiii</button></div>
    </div>
    </div>
  )
}
