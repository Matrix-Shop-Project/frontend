import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Drawer,
  Link, 
  Box
} from "@material-ui/core";

import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
//import CategoryNav from "./CategoryNav";
import Navbar from "./NavBar";

import Logo from "./logo.png"

import CategoryNav from "./CategoryNav";



const headersData = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Login",
    href: "/login",
  },
  {
    label: "Warenkorb",
    href: "/shoppingcard",
  },
  {
    label: "Meins",
    href: "/account",
  },
  {
    label: "Log Out",
    href: "/logout",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#f5f5f5ee",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    }
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#fff",
    textAlign: "left",
    alignItems: "center",
    height: "50px",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header() {
  const { header, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
        {femmecubatorMenu}
        
        
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        {/* <IconButton
          {...{
            edge: "start",
            color: "secondary",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton> */}

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "secondary",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          {/* <MenuItem>{label}</MenuItem> */}
        </Link>
      );
    });
  };
  const femmecubatorLogo = (
        <Link{...{ href: "/"}}>
        <Box
        style={{width: "50px"}}
            component="img"
            sx={{
            height: 50,
            }}
            alt="Your logo."
            src={Logo}
        />
        </Link>
  );



  const femmecubatorMenu = (

    <Typography>
      <Navbar />
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "default",
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>

       {/* <div>{displayMobile()}</div>  */}

      {/* <Search /> */}

       <CategoryNav />

    </header>
  );
}
