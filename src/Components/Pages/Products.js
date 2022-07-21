import React from "react";
import  ShoppingCard from "../Products/Cart/ShoppingCart";
//import ProductsCard from "../Products/ProductsCard";

export default function Products() {
  return (
    <>
      <div className="products" style={{ marginTop: "150px" }}>
        <h1>Products</h1>
      </div>
      {/* <ProductsCart /> */}
      <ShoppingCard />
    </>
  );
}
