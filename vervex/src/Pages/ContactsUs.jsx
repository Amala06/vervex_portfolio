import React from "react";
import "../Styles/ContactUs.css";
import img1 from "../Images/CU1.png";

const ContactsUs = () => {
  return (
    <>
      <div className="CU_mainContainer">
        <div className="CU_gridContainer">
          <div className="cu_gridDiv1_1">
            <div className="CU_Circle1"></div>
            <div className="CU_gridDiv1_text">
              Let’s Develop a <br />
              <span className="CU_SpecialText">Customized </span>
              product for you
            </div>
          </div>
          <div className="CU_gridDiv1_2">
            <div className="CU_gridDIv2_imageDiv">
              <img src={img1} alt="" className="CU_gridDIv2_image" srcset="" />
            </div>
          </div>
        </div>
        <div className="CU_gridContainer2">
          <div className="cu_gridDiv2_1">
            <div className="CU_InputContainer">
              <div className="CU_InputDiv">
                <input type="text" placeholder="NAME" className="CU_input input2" />
              </div>
              <div className="CU_InputDiv">
                <input
                  type="text"
                  placeholder="TITTLE/ROLE"
                  className="CU_input input2"
                />
              </div>
            </div>
            <div className="CU_InputContainer">
              <div className="CU_InputDiv">
                <input type="text" placeholder="EMAIL" className="CU_input input2" />
              </div>
              <div className="CU_InputDiv">
                <input type="text" placeholder="PHONE" className="CU_input input2" />
              </div>
            </div>
            <div className="CU_inputMainContainer">
            <div className="CU_InputContainer2" >
              <div className="CU_InputDiv">
                <input  style={{ width: "100%" }} type="text" placeholder="COMPANY" className="CU_input" />
              </div>
            </div>
            <div className="CU_InputContainer2">
              <div className="CU_InputDiv">
                <input
                style={{ width: "100%" }}
                  type="text"
                  placeholder="WHAT WE CAN HELP YOU WITH?"
                  className="CU_input"
                />
              </div>
            </div>
            <div className="CU_InputContainer2">
              <div className="CU_InputDiv">
                <input
                  style={{ width: "100%" }}
                  type="text"
                  placeholder="PLEASE TELL US MORE... (E.G.: YOUR IDEA, TIMELINE, BUDGET.)"
                  className="CU_input"
                />
              </div>
            </div>
            </div>
            <div className="CU_buttonContainer">
              SUBMIT YOUR REQUEST
            </div>
          </div>
          <div className="cu_gridDiv2_2">
            {/* <div class="circle-container"> */}
              <div class="CU_Circle2"></div>
              <div className="CU_CircleTextdiv">
                <div className="CU_CircleText">
                  Tell us about your <br /> project
                </div>
                <div className="CU_CircleText2">
                  We are always here to help. Whether you’re ready to start your
                  journey or not, reach out to us. We’d love to talk!
                  <br className="br" />
                  <br className="br"/>
                  <br />
                  Schedule a free consultation at vervex.technology@gmail.com, or fill out
                  the form and we will follow up with you shortly.
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactsUs;
