import React from 'react'
import '../Styles/Footer.css'
import { AiOutlineRight,AiOutlineArrowRight } from 'react-icons/ai';
import icon1 from '../Images/fi (1).png'
import icon2 from '../Images/fi (2).png'
import icon3 from '../Images/fi (3).png'
import icon4 from '../Images/fi (4).png'
import icon5 from '../Images/fi.png'
const Footer = () => {
  return (
    <div className="footer_mainContainer">
      <div className="footer_GridContainer">
          <div className="footer_GridSub1">
            <div className="footer_GridSub1_mainText">
              VERVEX
            </div>
            <div className="footer_GridSub1_subText">
              Vijay Nagar,
              <br /> Appolo Premium, 
              <br />Madhya Pradesh 452001,
              <br />
              Indore
              <br />
              <br />
              Phone: 8878923910,8839762419
              <br />
              Email: vervex.technology@gmail.com 
            </div>
          </div>
          <div className="footer_GridSub2">
          <div className="footer_GridSub1_mainText">
              COMPANY
            </div>
            <div className="footer_GridSub2_subText">
              <div className="footer_arrow_div" style={{paddingTop:"0"}}>
              <AiOutlineRight className='footer-arrow'/>Home
              </div>
              <div className="footer_arrow_div">
              <AiOutlineRight className='footer-arrow'/>About Us
              </div>
              <div className="footer_arrow_div">
              <AiOutlineRight className='footer-arrow'/>Services
              </div>
              <div className="footer_arrow_div">
              <AiOutlineRight className='footer-arrow'/>Projects
              </div>
            </div>
          </div>
          <div className="footer_GridSub3">
          <div className="footer_GridSub1_mainText">
              SERVICES
            </div>
            <div className="footer_GridSub3_subText">
              <div className="footer_arrow_div2" style={{paddingTop:"0"}}>
              <AiOutlineRight className='footer-arrow'/>Web Development
              </div>
              <div className="footer_arrow_div2">
              <AiOutlineRight className='footer-arrow'/>Web Designing
              </div>
              <div className="footer_arrow_div2">
              <AiOutlineRight className='footer-arrow'/>Graphic Design
              </div>
              <div className="footer_arrow_div2">
              <AiOutlineRight className='footer-arrow'/>SEO
              </div>
              <div className="footer_arrow_div2">
              <AiOutlineRight className='footer-arrow'/>Product Management
              </div>
            </div>
          </div>
          <div className="footer_GridSub4">
          <div className="footer_GridSub1_mainText">
              JOIN US
            </div>
          <div className="footer_GridSub4_subText">
              Send Your Email Address
            </div>
            <div className="footer_GridSub4_inputDiv">
              <input className='footer_input' type="text" placeholder='Enter Your Email'/>
             <div className="footer_button">
            <AiOutlineArrowRight/>
             </div>
            </div>
          </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_bottomDiv">
        <div className="footer_bottom_text">
        © Copyright VERVEX. All Rights Reserved
        </div>
        <div className="footer_bottom_icons">
          <img className='footer-icon' src={icon1} alt="" />
          <img className='footer-icon' src={icon2} alt="" />
          <img className='footer-icon' src={icon3} alt="" />
          <img className='footer-icon' src={icon4} alt="" />
          <img className='footer-icon' src={icon5} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer