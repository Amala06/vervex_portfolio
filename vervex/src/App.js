import SmallAboutCompany from "./Pages/Home/SmallAboutCompany";
import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Components/Navbar";
import WhyUs from "./Pages/Home/WhyUs";
// import AboutCompany from "./Pages/Home/AboutCompany";
import Services from './Pages/Home/Service'
import Footer from './Components/Footer'
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./app.css";
import CalltoAction from "./Components/CalltoAction";
import ContactsUs from "./Pages/ContactsUs";
import Testemonial from "./Pages/Home/Testemonial";
import ExtendedAboutus from "./Pages/ExtendedAboutus";
import TechStack from "./Components/TechStack";
import ExtendedService from "./Pages/ExtendedService";
import OurWork from "./Pages/Home/OurWork";
import Temp from "./Pages/Temp";
import Test from "./Pages/Test";
import Window from "./Pages/Window";
import Sticky_Our_Work from "./Pages/Sticky_Our_Work";
import GraphicDesgin from "./Pages/GraphicDesgin";
import SEO from "./Pages/SEO";
import Home from "./Pages/Home/Home";
import  BackToScroll from './Components/BackToScroll'
import Hero_section2 from "./Pages/Home/Hero_section2";

// import "./Styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home/> */}
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/extendedAboutUs" element={<ExtendedAboutus />} />
       <Route path="/contactUs" element={<ContactsUs />} />
       <Route path="/extendedservices" element={<ExtendedService />} />
       <Route path="/seo" element={<SEO />} />
       <Route path="/graphicDesign" element={<GraphicDesgin />} />
       </Routes>
       <Footer/> 
     
      </div>
    </BrowserRouter>
  );
}

export default App;
