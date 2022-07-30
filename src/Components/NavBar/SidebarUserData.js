import React from "react";

//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
//import * as BiIcons from "react-icons/bi";
//import * as CgIcons from "react-icons/cg";

export const SidebarUserData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "Products",
  //   path: "/products",
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: "nav-text",
  // },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "nav-text",
  },
  {
    title: "Impressum",
    path: "/impressum",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },

];
export const Login = [
  {
    title: "Login",
    path: "/login",
    icon: <MdIcons.MdLogin />,
    cName: "nav-text"
  },
 
]

export const Logout = [
   {
    title: "Logout",
    path: "/logout",
    icon: <MdIcons.MdLogin />,
    cName: "nav-text"
  },
]