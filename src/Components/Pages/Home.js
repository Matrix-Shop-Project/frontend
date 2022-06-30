import React from "react";
import Carousels from "../Carousel/Carousel";

import Category from "./Category";
import "../../sass/Pages.scss"



export default function Home() {
  return (
    <>
    <div className="home">
      
     <div>
     <Carousels />
     <Category />
     </div>
     
    </div>
    </>
  );
}