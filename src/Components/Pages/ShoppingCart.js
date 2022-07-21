import React from "react";
import ShoopingCart from "../Products/ShoopingCart";
import { CartProvider } from "react-use-cart";

export default function ShoppingCart() {
  return (
    <>
    <div className="category">
        <h1>Warenkorb</h1>
        <CartProvider>
        <ShoopingCart/>
        </CartProvider>
    </div>
    </>
  );
}