import React from "react";
import "../Styles/ExtendedService.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import img from "../Images/lp.png"
import { FaAssistiveListeningSystems, FaBuilding, FaClone, FaTrello, FaUsb, FaUserInjured, FaYelp } from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import img1 from '../Images/ex-services.png'
// ..
AOS.init();
const ExtendedService = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={0}>
          <div className="mainExtended">
            {/* <Parallax speed={0}> */}
            <div className="extended_header">
              <div className="extended_main_header">
                <div className="hero_circle"></div>
                <span className="extended_HeadText">Web Development</span>
                <div className="extended_text">
                  Our customized web development service prioritizes seamless
                  functionality, intuitive interfaces, and optimized
                  performance. From front-end to back-end, we cover all aspects
                  for your digital presence
                </div>
              </div>
              <div className="extended_img">
                <img src={img1} alt="" />
              </div>
              {/* <div className="hero_c"></div> */}
            </div>
            {/* </Parallax> */}
            <div className="extended_cards_main">
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaTrello />
                </div>
                <div className="extended_icon_header">
                  {" "}
                  FRONTEND DEVELOPMENT{" "}
                </div>
                <div className="extended_icon_text">
                  We are experts in crafting engaging and responsive user
                  interfaces. With our expertise in HTML, CSS, JavaScript,React
                  JS,etc.We create visually stunning websites that deliver a
                  seamless user experience.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaBuilding />
                </div>
                <div className="extended_icon_header">
                  E-COMMERCE DEVELOPMENT
                </div>
                <div className="extended_icon_text">
                  We excel in creating customized online stores with seamless
                  design and payment integration for optimal user experiences.
                  Let's enhance your online business and drive conversions
                  together!
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaClone />
                </div>
                <div className="extended_icon_header">
                  {" "}
                  BACKEND DEVELOPMENT{" "}
                </div>
                <div className="extended_icon_text">
                  We are skilled in building robust and scalable web
                  applications. With our expertise in programming languages like
                  MongoDB, Java.We ensure efficient data management and
                  server-side functionality.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUsb />
                </div>
                <div className="extended_icon_header"> API DEVELOPEMNT </div>
                <div className="extended_icon_text">
                  We specialize in creating powerful and secure interfaces to
                  facilitate seamless communication using NodeJs, Servlet etc.We
                  ensure efficient data exchange and integration for your
                  software ecosystem.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaAssistiveListeningSystems />
                </div>
                <div className="extended_icon_header">SAAS APPLICATION</div>
                <div className="extended_icon_text">
                  We excel in creating scalable and feature-rich
                  software-as-a-service solutions. With our expertise, we
                  deliver customized and cloud-based applications that provide
                  exceptional value and flexibility for your business needs.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaYelp />
                </div>
                <div className="extended_icon_header">
                  SUPPORT & MAINTENANCE{" "}
                </div>
                <div className="extended_icon_text">
                  We offer reliable support and maintenance services to keep
                  your applications running smoothly. From bug fixes to updates,
                  we ensure optimal performance and uptime.
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default ExtendedService;
