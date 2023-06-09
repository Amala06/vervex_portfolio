import React from "react";
import "../../Styles/HeroSection.css";
import MySwiper from "../../Components/MySwiper";
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
            <MySwiper />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
