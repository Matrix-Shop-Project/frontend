import React from "react";
import ShoopingCart from "../Products/ShoopingCart";


export default function ShoppingCart() {
  return (
    <>
    <div className="category">
        <h2>Warenkorb</h2>
        <hr className="bg-success"/>
        <ShoopingCart/>

    </div>
    </>
  );
}