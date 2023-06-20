import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contactUs",
    icon: <IoIcons.IoMdCall />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/ExtendedAboutUs",
    icon: <FaIcons.FaTeamspeak />,
    cName: "nav-text",
  },
];
const Sidebar = () => {
  return <div>Sidebar</div>;
};

export default Sidebar;
