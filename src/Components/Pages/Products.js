import React from "react";
import  ShoppingCard from "../Products/Cart/ShoppingCart";
//import ProductsCard from "../Products/ProductsCard";
import Warenkorb from "./ShoppingCart"

export default function Products() {
  return (
    <>
      <div className="products-container" style={{ marginTop: "150px" }}>
      </div>
      {/* <ProductsCart /> */}
      <ShoppingCard />
      <hr />
    <div className="mt-5 w-auto">
      <Warenkorb />
     
      </div>
    </>
  );
}
