import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./Sidebar";
import "../Styles/Navbar.css";
import { IconContext } from "react-icons/lib";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="main-Nav-div">
          <div className="nav-div-logo">
            <span className="nav-logo">VERVEX</span>
          </div>
          <div className="nav-div-contact">
            <span className="nav-contact">CONTACT</span>
          </div>

          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaBars onClick={showSidebar} />
              <span className="nav-menu-bars" onClick={showSidebar}>
                MENU
              </span>
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;