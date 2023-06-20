import React from "react";
import "../../Styles/HeroSection.css";
import MySwiper from "../../Components/MySwiper";
import img1 from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import gif from "../../Images/herogif.gif";
import { NavLink } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <div className="hero_mainContainer">
        <div className="hero_subContainer">
        <div className="hero_subContainer1">
          <div className="hero_circle"></div>
          <div className="hero_textContainer">
            <div className="hero_headText">
              Unleash the potential of your business with our exceptional service. We <span className="hero_gradient">design </span>,
              <span className="hero_gradient"> develop </span>and
              <span className="hero_gradient"> deploy </span>
              cutting-edge solutions.
            </div>
            <NavLink className='navlink_vervex' to='/contactUs'>
            <div className="hero_button">
              Hire Us
            </div>
            </NavLink>
          </div>
        </div>
        <div className="hero_subContainer2">
          <img src={gif} alt="" className="hero_image" />
        </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
