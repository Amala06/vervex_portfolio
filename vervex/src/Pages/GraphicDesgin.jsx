import React from "react";
import "../Styles/ExtendedService.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import img from "../Images/lp.png";
import {
    Fa500Px,
  FaAssistiveListeningSystems,
  FaBuffer,
  FaBuilding,
  FaChromecast,
  FaClone,
  FaTrello,
  FaUsb,
  FaUserInjured,
  FaYelp,
} from "react-icons/fa";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import img1 from "../Images/ex-services.png";
// ..
AOS.init();
const GraphicDesgin = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={0}>
          <div className="mainExtended">
            {/* <Parallax speed={0}> */}
            <div className="extended_header">
              <div className="extended_main_header">
                <div className="hero_circle"></div>
                <span className="extended_HeadText">Graphic Design</span>
                <div className="extended_text">
                  We are a team of experts in both graphic design and web
                  design, combining creativity and technical expertise to
                  deliver compelling visual experiences. From crafting
                  captivating logos and illustrations to designing user-friendly
                  websites with responsive layouts, we create designs that leave
                  a lasting impression and drive engagement.
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
                  <Fa500Px />
                </div>
                <div className="extended_icon_header"> UX DESIGN</div>
                <div className="extended_icon_text">
                  We specialize in user experience design, creating intuitive
                  and delightful interactions that enhance usability and
                  maximize user satisfaction. Let's create exceptional
                  experiences for your audience.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaBuffer />
                </div>
                <div className="extended_icon_header">
                  WIREFRAME & PROTOTYPING
                </div>
                <div className="extended_icon_text">
                  We offer wireframing and prototyping services, creating visual
                  blueprints and interactive models that bring ideas to life and
                  facilitate efficient design and development processes. Let's
                  prototype your vision.
                </div>
              </div>
              <div data-aos="zoom-in" className="extended_cards">
                <div className="extended_icon">
                  <FaChromecast />
                </div>
                <div className="extended_icon_header"> UI DESIGN </div>
                <div className="extended_icon_text">
                  We excel in user interface design, crafting visually appealing
                  and intuitive interfaces that enhance usability and deliver a
                  seamless user experience. Let's create engaging interfaces
                  together.
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default GraphicDesgin;
