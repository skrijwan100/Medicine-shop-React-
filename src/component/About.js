import React from 'react'
import rijwanIMG from "../Asset/my__pic.png"
import rijwanCV from "../Asset/resume.pdf"

export default function About() {
  return (
    <div className='aboutbody' style={{display:"flex", background:"black",justifyContent:"center", alignItems:"center",height:"80.66vh"}}>
      <div className="boxAbout" style={{width:"80vw",height:"400px", display:"flex", justifyContent:"space-around",flexWrap:"wrap",cursor:"pointer"}}>
        <div className="col1About">

          <img className='' src={rijwanIMG} alt=""  style={{height:"220px",height:"220px",borderRadius:"50%"}}  />
          
        </div>
        <div className="writeAbout">
          <p className='peraabout'>
            I am Sk Rijwan a dedicated front-end and backend developer with six months of professional experience in creating dynamic, responsive, and user-friendly web applications. My journey into web development began with a passion for blending creativity with technology, and I have since developed a keen eye for detail and a commitment to deliver high-quality digital solutions.
          </p>
          <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>

          <a className='btn btn-success mx-3' href="https://skrijwanprotfolio.netlify.app/" target='_blank'>More About me</a>
          <a href={rijwanCV} className='btn btn-success' download={rijwanCV}>Downlod my cv</a>
          </div>
        </div>
      </div>
    </div>
  )
}
