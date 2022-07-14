import React from "react";
import ComponentShoppingCart from "../../Components/Products/ComponentShoppingCart";
// import Footer from "../Footer/Footer";
import "../../sass/ShoppingCart.scss"

export default function Category() {
  return (
    <>
    <div className="shoppingcard" style={{marginTop: "100px"}}>
      
    <h1>Category 1</h1>
      <div className="shopping-cart-container">
      <div className="column-1">
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      </div>
      <div className="column-1">
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      </div>
      <div className="column-1">
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      </div>
      </div>
      <h1>Category 2</h1>
      <div className="shopping-cart-container">
      <div className="column-1">
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      </div>
      <div className="column-1">
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      </div>
      <div className="column-1">
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      <ComponentShoppingCart />
      </div>
      </div>
    </div>
    </>
  );
}