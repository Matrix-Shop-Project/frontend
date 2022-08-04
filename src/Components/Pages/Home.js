import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
//import Category from "./Category";
import "../../sass/Pages.scss";
import { useUser } from "../../Context/UserContext";

import CartComponent from "../Products/CartComponent";







export default function Home() {
  const token = useUser();
  return (
    <>
      <div className="home">
        <div className="Carousel">
          <Carousel />
        </div>
        <hr />
        {token.user ? (<h2 style={{margin: 50}}>Hi! {token.user.name} und Willkommen in unserem Shop!</h2>) : (<h2 style={{margin: 50}}>Hallo und Willkommen in unserem neuen Shop!</h2>)}
        
      </div>
      {/* <Category /> */}
      <CartComponent />
    </>
  );
}
