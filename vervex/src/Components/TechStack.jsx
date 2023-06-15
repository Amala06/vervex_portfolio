import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "../Styles/TechStack.css";
import { FaCss3Alt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import mg from "../Images/mg.png";
import fl from "../Images/fl.png";
// import { FaPostman } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();
// import
const TechStack = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={10}>
          <div className="tech_main">
            <Parallax speed={7}>
              <div data-aos="zoom-in" className="tech_header">
                Tech Stack
              </div>
              <div data-aos="zoom-in" className="tech_icon_container">
                <FaReact data-aos="zoom-in" className="tech_icon" />
                <AiFillHtml5 data-aos="zoom-in" className="tech_icon" />

                <FaCss3Alt data-aos="zoom-in" className="tech_icon" />
                <FaJava className="tech_icon" data-aos="zoom-in" />
                <FaNodeJs className="tech_icon" data-aos="zoom-in" />
                <p
                  className="tech_icon_text
"
                  data-aos="zoom-in"
                >
                  <img src={mg} alt="" />
                </p>
                <IoLogoJavascript className="tech_icon" data-aos="zoom-in" />
                <p className="tech_icon_text" data-aos="zoom-in">
                  {" "}
                  <img src={fl} alt="" />
                </p>
                {/* <FaPostman/> */}
                {/* <SiExpress className="tech_icon"/> */}
              </div>
            </Parallax>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default TechStack;
