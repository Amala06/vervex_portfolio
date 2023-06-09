import React from "react";
import "../../Styles/WhyUs.css";
import { animated, useSpring } from "@react-spring/web";
function Number1({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const WhyUs = () => {
  return (
    <>
      <div className="AU_section4_mainContainer">
        <div className="AU_circle">
          <div className="AU_circle2"></div>
        </div>
        <div className="AU_section4_HeadText">Why choose us?</div>
        <div className="AU_section4_gridContainer">
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
              <div className="AU_section4_gridContainerDivText1">
                <Number1 n={7} />+
              </div>
              <div className="AU_section4_gridContainerDivText2">
                Projects Done
              </div>
            </div>
          </div>
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
              <div className="AU_section4_gridContainerDivText1">
                <Number1 n={10} />+
              </div>
              <div className="AU_section4_gridContainerDivText2">
                Happy Clients
              </div>
            </div>
          </div>
          <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
              <div className="AU_section4_gridContainerDivText1">
                <Number1 n={30} />+
              </div>
              <div className="AU_section4_gridContainerDivText2">
                Sprints Completed
              </div>
            </div>
          </div>
          {/* <div className="AU_section4_gridContainerDiv">
            <div className="AU_section4_gridContainerDivText">
              <div className="AU_section4_gridContainerDivText1">
                <Number1 n={18} />+
              </div>
              <div className="AU_section4_gridContainerDivText2">Countries</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WhyUs;
