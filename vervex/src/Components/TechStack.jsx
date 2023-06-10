import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "../Styles/TechStack.css";
import { FaCss3Alt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
// import
const TechStack = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={10}>
          <div className="tech_main">
            <Parallax speed={7}>
              <div className="tech_header">Tech Stack</div>
              <div className="tech_icon_container">
                <FaReact className="tech_icon" />
                <AiFillHtml5 className="tech_icon" />
                <p className="tech_icon_text">NodeJS</p>
                <FaCss3Alt className="tech_icon" />

                <FaJava className="tech_icon" />

                <FaNodeJs className="tech_icon" />
                <p
                  className="tech_icon_text
"
                >
                  MongoDB
                </p>
                <IoLogoJavascript className="tech_icon" />

                <p className="tech_icon_text">Flutter</p>

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
