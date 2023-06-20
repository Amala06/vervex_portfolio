import React from 'react'
import '../../Styles/Services.css'
import img1 from '../../Images/service1.png'
import img2 from '../../Images/service2.png'
import img3 from '../../Images/service3.png'
import { NavLink } from 'react-router-dom'

const Service = () => {
  return (
    <>
    <div className="service_mainContainer">
      <div className="service_mainHead">
       <span className='service_mainHead_text'>Our Services</span> 
      </div>
      {/* <div className="service_subHead">
      "Unleashing the potential of the web through professional service delivery and development, producing significant digital solutions for businesses to succeed."
      </div> */}
    </div>
      <div className="service_boxContainer">
        <div className="box_subContainer">
          {/* <a href="/extendedservices"> */}
          <NavLink className="navlink_vervex" to='/extendedservices'>
        <div className="service_box1">
         <span className='service_box1_text'>Web Development</span> 
         <div className="serivce_box_1_imageDiv">
          <img className='serivce_box_1_image' src={img1} alt="" srcset="" />
         </div>
        </div>
        {/* </a> */}
        </NavLink>
        <NavLink className="navlink_vervex" to='/graphicDesign'>
        <div className="service_box2">
        <span className='service_box1_text' style={{marginTop:"20px"}}>Graphic Designing</span> 
        <div className="serivce_box_2_imageDiv" >
          <img className='serivce_box_2_image' src={img2} alt="" srcset="" />
         </div>
        </div>
        </NavLink>
        <NavLink className="navlink_vervex" to='/seo'>
        <div className="service_box3">
        <span className='service_box3_text'>SEO</span> 
        <div className="serivce_box_3_imageDiv">
          <img className='serivce_box_3_image' src={img3} alt="" srcset="" />
         </div>
        </div>
        </NavLink>
        </div>
        
      </div>
    </>
  )
}

export default Service