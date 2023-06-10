import React, { useState, useEffect } from "react";
// import "../../Style/ScrollScaleXComponent.css"; // Import the CSS file
import "../../Styles/AboutCompanySmall.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const SmallAboutCompany = () => {
  const [scaleX, setScaleX] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 300; // Maximum scroll position to trigger scaling
      const maxScaleX = 11.62; // Maximum scaling factor

      // Calculate the new scaleX value based on scroll position
      const newScaleX = Math.min(
        (scrollPosition / maxScroll) * maxScaleX,
        maxScaleX
      );
      setScaleX(newScaleX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div>
        <h1 style={{ display: "none" }}>Title</h1>
        <Parallax speed={30}>
          {/* <img src="image.jpg" alt="Parallax Image" /> */}
          <div className="About_main">
            <div
              className="About_component"
              style={{ transform: `scaleX(${scaleX})` }}
            >
              {/* Content */}
              {/* Vervex is a dynamic software company at the forefront of */}
            </div>
            <Parallax speed={6}>
              <p
                style={{
                  color: "white",
                  position: "absolute",
                  marginTop: "-22rem",
                  marginLeft: "16rem",
                  marginRight: "16rem",
                  fontFamily: "Roboto",
                  fontSize: "1.3rem",
                  textAlign: "justify",
                }}
              >
                A Software Company
              </p>
              <div
                className="About_Comp_text"
                style={{
                  color: "white",
                  position: "absolute",
                  marginTop: "-18rem",
                  marginLeft: "16rem",
                  marginRight: "16rem",
                  fontFamily: "Roboto",
                  fontSize: "1.7rem",
                  textAlign: "justify",
                }}
              >
                Vervex is an Innovating businesses with cutting-edge software
                solutions. We specialize in scalable web and mobile apps,
                delivering exceptional results on time and within budget. Our
                expert team provides strategic guidance to optimize digital
                strategies and drive growth. Join us for transformative
                possibilities.
              </div>
            </Parallax>
          </div>
          <div className="smallAbout_circle"></div>
        </Parallax>
        {/* <p>Some content...</p> */}
      </div>
    </ParallaxProvider>
  );
};

export default SmallAboutCompany;
