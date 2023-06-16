import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/flow.css";
import ev from "../Images/ev.png";
import dep from "../Images/dep.png";
import dev from "../Images/dev.png";
import des from "../Images/des.png";
import test from "../Images/test.png";
// import img from "../../Images/pro.jpg";
AOS.init();
const Temp = () => {
  return (
    <>
      <div className="main_flow">
        <div className="hero_circle"></div>
        <div className="main_flow_content">
          <p className="flow_header">Our Work Flow</p>
          <div className="h">
            <div data-aos="fade-left" className="flow_box">
              <div className="flow_content">
                <img src={ev} alt="" />
              </div>
            </div>

            <div
              className="flow_content_right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="flow_content_head">Evaluation</p>
              <p className="flow_content_body">
                Involves assessing project performance, analyzing data,
                identifying areas for improvement, and refining development
                processes to enhance efficiency, quality, and customer
                satisfaction.
              </p>
            </div>
          </div>
          <div className="h">
            <div data-aos="fade-left" className="flow_box">
              <div className="flow_content">
                <img src={des} alt="" />
              </div>
            </div>

            <div
              className="flow_content_right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="flow_content_head">Design</p>
              <p className="flow_content_body">
                Creating a comprehensive plan, architecture, and user interface
                that align with project requirements, functionality, and
                usability, ensuring effective implementation and successful
                software development
              </p>
            </div>
          </div>{" "}
          <div className="h">
            <div data-aos="fade-left" className="flow_box">
              <div className="flow_content">
                <img src={dev} alt="" />
              </div>
            </div>

            <div
              className="flow_content_right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="flow_content_head">Development</p>
              <p className="flow_content_body">
                Creating a comprehensive plan, architecture, and user interface
                that align with project requirements, functionality, and
                usability, ensuring effective implementation and successful
                software development
              </p>
            </div>
          </div>{" "}
          <div className="h">
            <div data-aos="fade-left" className="flow_box">
              <div className="flow_content">
                <img src={test} alt="" />
              </div>
            </div>

            <div
              className="flow_content_right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="flow_content_head">Testing and Debugging</p>
              <p className="flow_content_body">
                Systematically verifying and validating software components,
                functionalities, and performance to identify defects, ensure
                proper functionality, and guarantee that the software meets
                quality standards and user expectations.
              </p>
            </div>
          </div>{" "}
          <div className="h">
            <div data-aos="fade-left" className="flow_box">
              <div className="flow_content">
                <img src={dep} alt="" />
              </div>
            </div>

            <div
              className="flow_content_right"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <p className="flow_content_head">Deployement and Maintenance</p>
              <p className="flow_content_body">
                Release and installation of the software in the production
                environment, ongoing monitoring, bug fixes, updates, and support
                to ensure smooth operation, security, and user satisfaction
                throughout its lifecycle.
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Temp;
