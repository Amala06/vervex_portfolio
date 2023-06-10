import React from "react";
import "../Styles/CalltoAction.css";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const CalltoAction = () => {
  return (
    <>
      <ParallaxProvider>
        <Parallax speed={6}>
          <div className="call_to_action_main">
            <div className="call_to_action_container">
              <h4 className="call_action_header">Call to Action</h4>
              <div>
                <p className="call_to_action_text">
                  Ready to stand out in the online world? Our web solutions are
                  tailored to meet your unique needs. Contact us now and let's
                  create something amazing together!
                </p>
                <button className="call_to_action_button">CONTACT NOW</button>
              </div>
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
    </>
  );
};

export default CalltoAction;
