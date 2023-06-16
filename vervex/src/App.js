import SmallAboutCompany from "./Pages/Home/SmallAboutCompany";
import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Components/Navbar";
import WhyUs from "./Pages/Home/WhyUs";
// import AboutCompany from "./Pages/Home/AboutCompany";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./app.css";
import CalltoAction from "./Components/CalltoAction";
import TechStack from "./Components/TechStack";
import ExtendedService from "./Pages/ExtendedService";
import OurWork from "./Pages/Home/OurWork";
import Temp from "./Pages/Temp";
import Test from "./Pages/Test";
import Window from "./Pages/Window";
import Sticky_Our_Work from "./Pages/Sticky_Our_Work";
import Method from "./Pages/Method";

// import "./Styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <HeroSection /> */}
         <Navbar /> 
        {/* <HeroSection />
        <SmallAboutCompany />
        <ParallaxProvider>
          <Parallax speed={-10}>
            <WhyUs />/
          </Parallax>
        </ParallaxProvider>  */}
        {/* <HeroSection /> */}
        {/* <SmallAboutCompany /> */}
        {/* <ParallaxProvider> */}
          {/* <Parallax speed={-10}> */}
            {/* <WhyUs />/ */}
          {/* </Parallax> */}
        {/* </ParallaxProvider>  */}
       {/* <HeroSection/> */}
        {/* <CalltoAction />  */}
        <TechStack />
        {/* <ExtendedService /> */}
        {/* <Temp /> */}

        {/* <div
          className="sticky_main_container"
          style={{
            height: "600vh",
            position: "relative",
            background: " var(--main-colour)",
          }}
        >
          <div
            style={{
              position: "sticky",
      
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
                padding: "20px",
          
              }}
            >
              Discover our impressive portfolio of customized websites and web
              applications that exemplify our expertise in delivering seamless
              functionality, intuitive interfaces, and optimized performance.
              From captivating e-commerce platforms to sleek corporate websites
              and innovative custom applications, our end-to-end development
              services cater to your unique requirements.
              <br />
            </p>
            <button className="OurWork_button">
              Explore More
            </button>
          </div>
          <OurWork />
        </div>{" "} */}
        {/* <Sticky_Our_Work /> */}

        {/* <OurWork /> */}
        {/* <Test /> */}
        {/* <Method/> */}
        <Temp />
        {/* <Temp /> */}
        {/* <Window/> */}
        {/* <TechStack/> */}
        {/* <AboutCompany/> */}
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
