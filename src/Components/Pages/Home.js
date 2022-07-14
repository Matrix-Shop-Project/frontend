import React from "react";
import Carousels from "../../Components/Carousel/Carousel";

import Category from "./Category";
import "../../sass/Pages.scss"




export default function Home() {
  return (
    <>
    <div className="home1">
      
     <div>
      <div className="Carousel">
     <Carousels  />
     </div>
     <Category />
     </div>
    </div>
    </>
  );
}