import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HeroSection from "./HeroSection";
import SmallAboutCompany from "./SmallAboutCompany";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import WhyUs from "./WhyUs";
import Temp from "../Temp";
import Services from "./Service";
import CalltoAction from "../../Components/CalltoAction";
import Testemonial from "./Testemonial";
import TechStack from "../../Components/TechStack";
import Sticky_Our_Work from "../Sticky_Our_Work";
import Hero_section2 from "./Hero_section2";
import StarsCanvas from '../../Components/canvas/Stars'
import './home.css'
import EarthCanvas from "../../Components/canvas/Earth";
import ComputersCanvas from "../../Components/canvas/computer";




const Home = () => {
  return (
    <>
    {/* <Navbar /> */}
    <div className='new'>
          <Hero_section2 />
          {/* <ComputersCanvas/> */}
          <StarsCanvas/>
          </div>
      <SmallAboutCompany />
      <ParallaxProvider>
        <Parallax speed={-10}>
          <WhyUs />
        </Parallax>
      </ParallaxProvider>
      <Sticky_Our_Work/>
       <Temp/>
       <Services/>
       <CalltoAction/>
       <Testemonial/>
       <TechStack/> 
      {/* <Footer /> */}
     
    </>
  );
};

export default Home;
