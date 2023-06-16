import React from "react";
import OurWork from "./Home/OurWork";
import "../Styles/Sticky_Our_Work.css";
const Sticky_Our_Work = () => {
  return (
    <>
      <div className="sticky_main_container">
        <div className="Sticky_subContainer">
          <div className="hero_circle"></div>
          <div className="Sticky_headText">Our Work</div>
          <p className="Sticky_subText">
            Discover our impressive portfolio of customized websites and web
            applications that exemplify our expertise in delivering seamless
            functionality, intuitive interfaces, and optimized performance. From
            captivating e-commerce platforms to sleek corporate websites and
            innovative custom applications, our end-to-end development services
            cater to your unique requirements.
            <br />
          </p>
          {/* <button className="OurWork_button">Explore More</button> */}
          <div className="Our_work_button">Explore More</div>
        </div>
        <OurWork />
      </div>
    </>
  );
};

export default Sticky_Our_Work;
