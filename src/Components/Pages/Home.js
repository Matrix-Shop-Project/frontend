import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "./Category";
import "../../sass/Pages.scss";
import { useUser } from "../../Context/UserContext";

export default function Home() {
  const token = useUser();
  return (
    <>
      <div className="home">
        <div className="Carousel">
          <Carousel />
        </div>
        {token.user ? (<h2 style={{textAlign: "center"}}>Hi! {token.user.name}</h2>) : (<h2>Hallo in unsere Shop</h2>)}
        
      </div>
      <Category />
    </>
  );
}
