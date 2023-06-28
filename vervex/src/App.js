import React from "react";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./app.css";
import ContactsUs from "./Pages/ContactsUs";
import ExtendedAboutus from "./Pages/ExtendedAboutus";
import ExtendedService from "./Pages/ExtendedService";
import GraphicDesgin from "./Pages/GraphicDesgin";
import SEO from "./Pages/SEO";
import Home from "./Pages/Home/Home";
import PreLoader from "./Components/preLoader";

// import "./Styles/App.css";
function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        {isLoading ? (
          <PreLoader />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/extendedAboutUs" element={<ExtendedAboutus />} />
              <Route path="/contactUs" element={<ContactsUs />} />
              <Route path="/extendedservices" element={<ExtendedService />} />
              <Route path="/seo" element={<SEO />} />
              <Route path="/graphicDesign" element={<GraphicDesgin />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
