import React from "react";
import "../../Styles/OurWork.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../Images/sp1.gif";
import u from "../../Images/u.gif";
import zo from "../../Images/zo.gif";
import e from "../../Images/e.jpg";
import lp from "../../Images/lp.jpg";

// import img from "../../Images/pro.jpg";
AOS.init();
const OurWork = () => {
  return (
    <>
      <div className="Our_work_container">
        <div className="our_work_scrollable-div">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            <img src={img} alt="" />
            <div className="ourwork_body_text">
              <p className="ourwork_small_text">React JS</p>
              <p className="ourwork_small_text">Mongo DB</p>
              <p className="ourwork_small_text">Node JS</p>
              <p className="ourwork_small_text">Socket IO</p>
              <p className="ourwork_small_text">Ecommerce</p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            <img src={zo} alt="" />
            <div className="ourwork_body_text">
              <p className="ourwork_small_text">React JS</p>
              <p className="ourwork_small_text">React Redux</p>
              <p className="ourwork_small_text">Chakra UI</p>
              <p className="ourwork_small_text">Food WebApp</p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            {" "}
            <img src={e} alt="" />
            <div className="ourwork_body_text">
              <p className="ourwork_small_text">React JS</p>
              <p className="ourwork_small_text">React Redux</p>
              <p className="ourwork_small_text">Chakra UI</p>
              <p className="ourwork_small_text">Socket io</p>
              <p className="ourwork_small_text">Mongo DB</p>

              <p className="ourwork_small_text">Node Js</p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            <img src={u} alt="" />
            <div className="ourwork_body_text">
              <p className="ourwork_small_text">Dart</p>
              <p className="ourwork_small_text">Flutter</p>
              <p className="ourwork_small_text">API Integration</p>
              <p className="ourwork_small_text">Univerity App</p>
              {/* <p className="ourwork_small_text">Ecommerce</p> */}
            </div>
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            <img src={lp} alt="" />
            <div className="ourwork_body_text">
              <p className="ourwork_small_text">React</p>
              <p className="ourwork_small_text">Web Design</p>
              <p className="ourwork_small_text">Religious</p>
              {/* <p className="ourwork_small_text">Univerity App</p> */}
              {/* <p className="ourwork_small_text">Ecommerce</p> */}
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            esse sit explicabo magni autem soluta voluptatem in cupiditate error
            temporibus, blanditiis deleniti quo. Hic, recusandae? Exercitationem
            illum sed ea labore!
          </div>

          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            <img src={img} alt="" />
            <div className="ourwork_body_text">
              <p className="ourwork_small_text">React JS</p>
              <p className="ourwork_small_text">Mongo DB</p>
              <p className="ourwork_small_text">Node JS</p>
              <p className="ourwork_small_text">Socket IO</p>
              <p className="ourwork_small_text">Ecommerce</p>
            </div>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="OurWork_project"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
            esse sit explicabo magni autem soluta voluptatem in cupiditate error
            temporibus, blanditiis deleniti quo. Hic, recusandae? Exercitationem
            illum sed ea labore!
          </div>
        </div>
     
    
     

     
    
      </div>
    </>
  );
};

export default OurWork;
