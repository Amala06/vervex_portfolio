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



const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
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
