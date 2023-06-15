import React from 'react'
import OurWork from './Home/OurWork';
// import "../Styles/Sticky_Our_Work.css";
const Sticky_Our_Work = () => {
  return (
    <>
      <div
        className="sticky_main_container"
        style={{
          height: "600vh",
          position: "relative",
          background: " var(--main-colour)",
        //   border: "2px solid red",
        }}
      >
        <div
          style={{
            position: "sticky",
            // border: "2px solid red",
            // background: "blue",
            // background:
            //   "linear-gradient(236.42deg, #8105E1 30.05%, rgba(0, 124, 124, 0) 127.3%)",
            zIndex: "400",
            width: "30rem",
            height: "37rem",
            top: "0",
          }}
        >
          <div className="hero_circle"></div>
          <p
            style={{
              textAlign: "left",
              fontFamily: "Encode Sans",
              color: "white",
              fontSize: "40px",
              lineHeight: "50px",
              // top: "10000rem",
            //   border: "2px solid purple",
              padding: "20px",
              paddingTop: "7rem",
              paddingLeft: "3rem",
            }}
          >
            Our Work
          </p>
          <p
            style={{
              textAlign: "justify",
              fontFamily: "Encode Sans",
              color: "white",
              margin: "5% 5%",
              fontSize: "1rem",
              // textAlign:"justify",
              // lineHeight: "50px",
              // top: "10000rem",
              padding: "20px",
              // paddingTop: "7rem",
            }}
          >
            Discover our impressive portfolio of customized websites and web
            applications that exemplify our expertise in delivering seamless
            functionality, intuitive interfaces, and optimized performance. From
            captivating e-commerce platforms to sleek corporate websites and
            innovative custom applications, our end-to-end development services
            cater to your unique requirements.
            <br />
          </p>
          <button className="OurWork_button">Explore More</button>
        </div>
        <OurWork />
      </div>
    </>
  );
}

export default Sticky_Our_Work