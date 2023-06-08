import React from 'react'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import * as IoIcons from 'react-icons/io'
import * as AiIcons from 'react-icons/ai'
export const SidebarData=[
 {
    title:"Home",
    path:"/",
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
 },
 {
    title:"Contact Us",
    path:"../Pages/ContactsUs",
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
 },
 {
    title:"About Us",
    path:"/ExtendedAboutUs",
    icon:<AiIcons.AiFillHome/>,
    cName:'nav-text'
 },
]
const Sidebar = () => {
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar