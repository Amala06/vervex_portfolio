import SmallAboutCompany from "./Pages/Home/SmallAboutCompany";
import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Components/Navbar";
import WhyUs from "./Pages/Home/WhyUs";
import AboutCompany from "./Pages/Home/AboutCompany";
import Services from './Pages/Home/Service'
import Footer from './Components/Footer'
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import { Route, Switch, BrowserRouter, Router, Routes } from "react-router-dom";
import "./app.css";
import CalltoAction from "./Components/CalltoAction";
import TechStack from "./Components/TechStack";

// import "./Styles/App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <HeroSection />
        <SmallAboutCompany />
        <CalltoAction />
        <TechStack />
        <ParallaxProvider>
          <Parallax speed={-10}>
            <WhyUs />
            <Services/>
          </Parallax>
        </ParallaxProvider>
            <Footer/>

        {/* <AboutCompany/> */}
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
