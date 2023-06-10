import React from "react";
import "../../Styles/HeroSection.css";
import MySwiper from "../../Components/MySwiper";
import img1 from "../../Images/1.png";
import img2 from "../../Images/2.png";
import img3 from "../../Images/3.png";
import gif from "../../Images/herogif.gif"
const HeroSection = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero_body">
          <div className="hero_text_main">
            <div className="hero_circle"></div>
            <div className="hero_content">
              Unleash the potential of your business with our exceptional
              service. We <span className="gradient-text ">design</span> ,
              <span className="gradient-text">develop</span> , and{" "}
              <span className="gradient-text">deploy</span> cutting-edge
              solutions.
              <button className="main_button">Hire us</button>
            </div>
          </div>
          <div className="hero_testimonial">
            {/* <MySwiper /> */}
            {/* <marquee behavior="" direction="">
             */}
            {/* <div className="marquee-element"> */}
            <img src={gif} alt=""  className="hero-image"  />
            {/* <video src={gif}/> */}
            {/* <img src={img2} alt="" className="hero-image" /> */}
            {/* <img src={img3} alt="" className="hero-image" /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
