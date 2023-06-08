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

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AboutCompany/>
    <Routes>
      <Route path="/" >
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
