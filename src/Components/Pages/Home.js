import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Category from "./Category";
import "../../sass/Pages.scss";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="Carousel">
          <Carousel />
        </div>
      </div>
      <Category />
    </>
  );
}
