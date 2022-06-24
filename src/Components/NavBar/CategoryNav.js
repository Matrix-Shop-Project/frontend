import React from "react";
import Lottie from "lottie-react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

import shoppingBag from "./lottie/shopping-bag.json";
import shoppingWoman from "./lottie/woman-icon.json";
import shoppingMan from "./lottie/man-account-icon.json";
import shoppingHome from "./lottie/home-icon.json";
import shoppingKind from "./lottie/kids-wave.json";
import shoppingBitcoin from "./lottie/bitcoin-wallet.json";
import shoppingElektro from "./lottie/laptop-icon.json";

import "../../sass/NavCategory.scss"

export default function CategoryNav() {
  return (
    <>
    <div className="Category">
    
      <Link
          {...{
            component: RouterLink,
            to: "/category",
            style: { textDecoration: "none" },
            key: "2cat",
          }}
        >
      <figure>
        <Lottie
          animationData={shoppingWoman}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>für Frauen</figcaption>
      </figure>
    </Link>
    <Link
          {...{
            component: RouterLink,
            to: "/category",
            style: { textDecoration: "none" },
            key: "3cat",
          }}
        >
      <figure>
        <Lottie
          animationData={shoppingMan}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>für Menner</figcaption>
      </figure>
      </Link>
      <Link
          {...{
            component: RouterLink,
            to: "/category",
            style: { textDecoration: "none" },
            key: "4cat",
          }}
        >
      <figure>
        <Lottie
          animationData={shoppingKind}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>für Kindern</figcaption>
      </figure>
      </Link>
      <Link
          {...{
            component: RouterLink,
            to: "/category",
            style: { textDecoration: "none" },
            key: "1cat",
          }}
        >
      <figure>
        <Lottie
          animationData={shoppingHome}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>für zuHause</figcaption>
      </figure>
      </Link>
      <Link
          {...{
            component: RouterLink,
            to: "/category",
            style: { textDecoration: "none" },
            key: "1cat",
          }}
        >
      <figure>
        <Lottie
          animationData={shoppingElektro}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Elektronik</figcaption>
      </figure>
      </Link>
      <Link
          {...{
            component: RouterLink,
            to: "/category",
            style: { textDecoration: "none" },
            key: "1cat",
          }}
        >
      <figure>
        <Lottie
          animationData={shoppingBitcoin}
          loop={true}
          style={{ width: 150, marginTop: "4rem" }}
          label="Category"
        />
        <figcaption>Bitcoin</figcaption>
      </figure>
      </Link>
      </div>
    </>
  );
}
