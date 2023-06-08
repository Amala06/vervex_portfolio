import AboutCompany from "./Pages/Home/AboutCompany";
import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Components/Navbar";
// import AboutCompany from './Pages/Home/AboutCompany'
// import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./app.css";

import "./Styles/App.css";
function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutCompany />
      {/* <BrowserRouter>
        <Navbar />
        <AboutCompany />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Test/> */}
    </div>
  );
}

export default App;
