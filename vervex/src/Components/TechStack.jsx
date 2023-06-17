import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import "../Styles/TechStack.css";
import { FaCss3Alt, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import mg from "../Images/mg.png";
import fl from "../Images/fl.png";
import img1 from "../Images/tc_html.svg";
import img2 from "../Images/tc_css.svg";
import img3 from "../Images/tc_react.svg";
import img4 from "../Images/tc_java.svg";
import img5 from "../Images/tc_flutter.svg";
import img6 from "../Images/tc_mongo.svg";
import img7 from "../Images/tc (6).svg";
import img8 from "../Images/tc_js.svg";
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
            <Parallax className="tech-sub" speed={7}>
              <div data-aos="zoom-in" className="tech_header">
                <span className="tech_header_text">Tech Stack </span>
              </div>
              <div data-aos="zoom-in" className="tech_icon_container">
                <img
                  src={img1}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img2}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img3}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img4}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img5}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img6}
                  data-aos="zoom-in"
                  className="sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img7}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
                <img
                  src={img8}
                  data-aos="zoom-in"
                  className="tech_icon sh_icons"
                  alt=""
                  srcset=""
                />
              </div>
            </Parallax>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default TechStack;
