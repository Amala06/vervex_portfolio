import AboutCompany from "./Pages/Home/AboutCompany";
import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Components/Navbar";
import AboutCompany from './Pages/Home/AboutCompany'
import {
  Route,
  Switch,
  BrowserRouter , Router,
  Routes,
} from "react-router-dom";
import './app.css'

import "./Styles/App.css"
function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <HeroSection />
      <AboutCompany />
      {/* <Test/> */}
    </div>
=======
    <BrowserRouter>
    <Navbar/>
    <AboutCompany/>
    <Routes>
      <Route path="/" >
      </Route>
    </Routes>
  </BrowserRouter>
>>>>>>> aff19679cddb277ef9b1d795ce23bc07b0b319c8
  );
}

export default App;
