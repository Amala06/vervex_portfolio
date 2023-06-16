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

// import "./Styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <HeroSection />
        <SmallAboutCompany />
        <ParallaxProvider>
          <Parallax speed={-10}>
            <WhyUs />
            <Sticky_Our_Work/>
            <Testemonial/>
          </Parallax>
        </ParallaxProvider>
        {/* <HeroSection/> */}
        <CalltoAction />
        <TechStack />

        {/* <AboutCompany/> */}
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
