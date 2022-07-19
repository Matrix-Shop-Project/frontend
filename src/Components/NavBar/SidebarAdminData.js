import React from "react";

// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import * as MdIcons from "react-icons/md";
// import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export const AdminMenu = [
  {
    title: "Admin Menu",
    path: "#",
    cName: "nav-text-admin-menu"
  },
  // {
  //   title: "Login",
  //   path: "/login",
  //   icon: <MdIcons.MdLogin />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Products",
  //   path: "/products",
  //   icon: <FaIcons.FaCartPlus />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Category",
  //   path: "/category",
  //   icon: <BiIcons.BiCategory />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Warenkorb",
  //   path: "/shoppingcard",
  //   icon: <CgIcons.CgShoppingCart />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Contact",
  //   path: "/contact",
  //   icon: <AiIcons.AiOutlineContacts />,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Impressum",
  //   path: "/impressum",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text"
  // },
  {
    title: "Dashboard",
    path: "/admin",
    icon: <AccountBalanceIcon />,
    cName: "nav-text-admin"
  },
  {
    title: "AddProduct",
    path: "/admin/createproduct",
    icon: <ShoppingCartCheckoutIcon />,
    cName: "nav-text-admin"
  },
];