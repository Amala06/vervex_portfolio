import React from "react";
import "../Styles/ExtendedService.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import img from "../Images/lp.png"
import { FaUserInjured } from "react-icons/fa";
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
                    performance. From front-end to back-end, we cover all
                    aspects for your digital presence
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
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaUserInjured />
                </div>
                <div className="extended_icon_header">UI / UX </div>
                <div className="extended_icon_text">
                  UI/UX (User Interface/User Experience) encompasses the design
                  and interaction aspects of a website or application, focusing
                  on usability, aesthetics, and overall user satisfaction.
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
