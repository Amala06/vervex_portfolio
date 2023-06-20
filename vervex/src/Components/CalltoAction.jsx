import React from "react";
import "../Styles/CalltoAction.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";

const CalltoAction = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={6}>
          <div className="call_to_action_main">
            <div className="call_to_action_sub">
              <div className="call_to_action_sub1">
                Call to action
                <div className="call_to_action_sub1_text">
                  Interested in our Services? Ready to Get More out of your
                  budget?
                  <br />
                  Join us today!
                </div>
              </div>
              <div className="call_to_action_sub2">
                <NavLink className='navlink_vervex' to='/contactUs'>
                <div className="call_To_Action_button">
                  Call to action
                </div>
                </NavLink>
              </div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default CalltoAction;
