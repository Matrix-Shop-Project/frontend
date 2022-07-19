import React, { useState } from "react";
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { useUser } from '../../Context/UserContext';

import "../../sass/Navbar.scss";
import { Box, Button } from "@mui/material";

import { SidebarUserData } from "./SidebarUserData";
import { Login } from "./SidebarUserData";
import { Logout } from "./SidebarUserData"
import { AdminMenu } from "./SidebarAdminData";

export default function Navbar() {
  const {token, user } = useUser();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarUserData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {(!token ?
              (Login.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                )
              })) :
              (
                Logout.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                    <Button onClickCapture={logout}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Button>
                  </li>
                  )
                })
              )
              )}
              {
                token ? (user.role === 1 ? (
                  AdminMenu.map((item, index) => {
                    return (
                      <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                    )
                  })
                  ) : (<p style={{color: "black", margin: 10}}>Tel: +49 (0)15253505536</p>)) : (<p style={{color: "black", margin: 10}}>Tel: +49 (0)15253505536</p>)
              }
            <div style={{ margin: 15 }}>
              <Link to={"/"}>
                <Box
                  style={{ width: "auto", textAlign: "center" }}
                  component="img"
                  sx={{
                    height: 150,
                  }}
                  alt="Your logo."
                  src={Logo}
                />
              </Link>
            </div>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
