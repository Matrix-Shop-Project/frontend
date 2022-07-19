import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Link,
  Box
} from "@material-ui/core";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HeadersData } from "./HeaderData";
import { useUser } from '../../Context/UserContext';
//import CategoryNav from "./CategoryNav";
import Navbar from "./NavBar";
import Logo from "./logo.png"
import CategoryNav from "./CategoryNav";


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
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 400,
    size: "12px",
    marginLeft: "38px",
    fontSize: "12px",
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
  const { token, user } = useUser();
  const { header, menuButton, toolbar } = useStyles();

  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = "/";
  };

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
        <div>{getMenuButtons()}{loginButtons()}</div>
        {femmecubatorMenu}
      </Toolbar>
    );
  };

  const femmecubatorLogo = (
    <Link{...{ href: "/" }}>
      <Box
        style={{ width: "50px" }}
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

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const getMenuButtons = () => {
    return HeadersData.map(({ label, href, ico }) => {
      return (
        <Button
          {...{
            startIcon: ico,
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

  const loginButtons = () => {
    return (
      !token ? (<Button
        {...{
          startIcon: <LoginIcon />,
          key: 'Login',
          color: "default",
          to: '/login',
          component: RouterLink,
          className: menuButton,
        }}
      >
        Login
      </Button>) : (
        <>
          <Button
            {...{
              // startIcon: <PersonOutlineIcon />,
              key: 'Mein konto',
              color: "default",
              to: '/account',
              component: RouterLink,
              className: menuButton,
            }}
          >
            Warenkorb
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </Button>
          <Button
            {...{
              // startIcon: <PersonOutlineIcon />,
              key: 'Mein konto',
              color: "default",
              to: '/account',
              component: RouterLink,
              className: menuButton,
            }}
          >Mein Konto 
            <Stack direction="row" spacing={2}>
              <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" style={{marginLeft: 5}}/>
            </Stack>
          </Button>
          <Button
            startIcon={<LogoutIcon />}
            key='Logout'
            color="default"
            onClick={logout}
            className={menuButton}
          >
            Logout
          </Button>

        </>
      )

    )
  }

  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>

      {/* <div>{displayMobile()}</div>  */}

      {/* <Search /> */}

      <CategoryNav />

    </header>
  );
}
