import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/flow.css";
import ev from "../Images/ev.png";
import dep from "../Images/dep.png";
import dev from "../Images/dev.png";
import des from "../Images/des.png";
import test from "../Images/test.png";
// import img className="temp_image" className:"temp_image" from "../../Images/pro.jpg";
AOS.init();
const Temp = () => {
  return (
    <>
      <div className="main_flow">
        <div className="hero_circle"></div>
        <div className="main_flow_content">
          <p className="flow_header">Our Work Flow</p>
          <div className="h Temp_subContainer">
            <div className="temp_left">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="temp_number"
              >
                <div className="temp_text1">1</div>
                <div className="temp_text2">STEP</div>
              </div>
              <div className="flowBox_left">
                <div data-aos="fade-left" className="flow_box">
                  <div className="flow_content">
                    <img className="temp_image" src={ev} alt="" />
                  </div>
                </div>
                <div className="temp_image_text">Evaluation</div>
              </div>
            </div>
            <div
              data-aos-duration="1500"
              data-aos="fade-right"
              className="temp_right"
            >
              <div
                className="flow_content_right"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flow_content_body">
                  Involves assessing project performance, analyzing data,
                  identifying areas for improvement, and refining development
                  processes to enhance efficiency, quality, and customer
                  satisfaction.
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="temp-line"
            data-aos-duration="1300"
          ></div>

          {/* div 2 */}

          <div className="h Temp_subContainer">
            <div className="temp_left">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="temp_number"
              >
                <div className="temp_text1">2</div>
                <div className="temp_text2">STEP</div>
              </div>
              <div className="flowBox_left">
                <div data-aos="fade-left" className="flow_box">
                  <div className="flow_content">
                    <img className="temp_image" src={des} alt="" />
                  </div>
                </div>
                <div className="temp_image_text">Design</div>
              </div>
            </div>
            <div className="temp_right">
              <div
                className="flow_content_right"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flow_content_body">
                  Creating a comprehensive plan, architecture, and user
                  interface that align with project requirements, functionality,
                  and usability, ensuring effective implementation and
                  successful software development
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="temp-line"
            data-aos-duration="1300"
          ></div>
          {/* div 3 */}

          <div className="h Temp_subContainer">
            <div className="temp_left">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="temp_number"
              >
                <div className="temp_text1">3</div>
                <div className="temp_text2">STEP</div>
              </div>
              <div className="flowBox_left">
                <div data-aos="fade-left" className="flow_box">
                  <div className="flow_content">
                    <img className="temp_image" src={dev} alt="" />
                  </div>
                </div>
                <div className="temp_image_text">Development</div>
              </div>
            </div>
            <div className="temp_right">
              <div
                className="flow_content_right"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flow_content_body">
                  Creating a comprehensive plan, architecture, and user
                  interface that align with project requirements, functionality,
                  and usability, ensuring effective implementation and
                  successful software development
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="temp-line"
            data-aos-duration="1300"
          ></div>
          {/* div 4 */}
          <div className="h Temp_subContainer">
            <div className="temp_left">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="temp_number"
              >
                <div className="temp_text1">4</div>
                <div className="temp_text2">STEP</div>
              </div>
              <div className="flowBox_left">
                <div data-aos="fade-left" className="flow_box">
                  <div className="flow_content">
                    <img className="temp_image" src={test} alt="" />
                  </div>
                </div>
                <div className="temp_image_text">Testing</div>
              </div>
            </div>
            <div className="temp_right">
              <div
                className="flow_content_right"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flow_content_body">
                  Systematically verifying and validating software components,
                  functionalities, and performance to identify defects, ensure
                  proper functionality, and guarantee that the software meets
                  quality standards and user expectations.
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="temp-line"
            data-aos-duration="1300"
          ></div>
          {/* div 5 */}
          <div className="h Temp_subContainer">
            <div className="temp_left">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="temp_number"
              >
                <div className="temp_text1">5</div>
                <div className="temp_text2">STEP</div>
              </div>
              <div className="flowBox_left">
                <div data-aos="fade-left" className="flow_box">
                  <div className="flow_content">
                    <img className="temp_image" src={dep} alt="" />
                  </div>
                </div>
                <div className="temp_image_text">Deployment</div>
              </div>
            </div>
            <div className="temp_right">
              <div
                className="flow_content_right"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flow_content_body">
                Release and installation of the software in the production
                    environment, ongoing monitoring, bug fixes, updates, and
                    support to ensure smooth operation, security, and user
                    satisfaction throughout its lifecycle.
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="temp-line"
            data-aos-duration="1300"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Temp;
