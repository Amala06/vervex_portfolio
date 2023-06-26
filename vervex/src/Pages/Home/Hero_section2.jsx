import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import EarthCanvas from "../../Components/canvas/Earth";
import SectionWrapper from "../../hoc/SectionWrapper";
import { slideIn } from "../../utils/motion";
import "./HeroSection2.css";
import StarsCanvas from "../../Components/canvas/Stars";
import img1 from '../../Images/bootstrap-right.png'
import img2 from '../../Images/css.png'
import img3 from '../../Images/figma.png'
import img4 from '../../Images/flutter-rigt.png'
import img5 from '../../Images/html.png'
import img6 from '../../Images/java.png'
import img7 from '../../Images/js-right.png'
import img8 from '../../Images/react.png'

const Contact = () => {
  return (
    <>
      <div className="hs2_mainContainer">
        <div className="hs2_textContainer1">
          <div className="hs2_mainText">VERVEX : CONNECT TO THE WORLD</div>
          {/* <div className="hs2_subtext">Empowering Your Digital Presence</div> */}
        </div>
        <div className="hs2_flexContainer">
          <div className="hs2_subContainer1">
            <img src={img2} alt="" className="h2simg img1" />
            <img src={img3} alt="" className="h2simg img2" />
            <img src={img5} alt="" className="h2simg img3" />
            <img src={img6} alt="" className="h2simg img4" />
          </div>

          <div className="hs2_subContainer2">
            <motion.div className="earth_canvas">
              <EarthCanvas />
            </motion.div>
          </div>
          <div className="hs2_subContainer3">
          <img src={img1} alt="" className="h2simg img5" />
            <img src={img4} alt="" className="h2simg img6" />
            <img src={img7} alt="" className="h2simg img7" />
            <img src={img8} alt="" className="h2simg img8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
