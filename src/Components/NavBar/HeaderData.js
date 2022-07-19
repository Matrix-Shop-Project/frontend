import React from "react";
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export const HeadersData = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Kategorien",
    href: "/category",
    ico: <CategoryIcon color="primary"/>
  },
  {
    label: "Merkliste",
    href: "/",
    ico: <FavoriteBorderIcon color="secondary"/>
  },
  // {
  //   label: "Warenkorb",
  //   href: "/shoppingcard",
  //   ico: <AddShoppingCartIcon color="success"/>
  // },
  // {
  //   label: "Mein Konto",
  //   href: "/account",
  //   ico: <PersonOutlineIcon />
  // },
];