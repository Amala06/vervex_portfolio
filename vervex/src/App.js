import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Components/Navbar";
import AboutCompany from "./Pages/Home/AboutCompany";
import { Route, Switch, BrowserRouter, Router, Routes } from "react-router-dom";
import "./app.css";
import WhyUs from "./Pages/Home/WhyUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AboutCompany />
      <WhyUs />
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
