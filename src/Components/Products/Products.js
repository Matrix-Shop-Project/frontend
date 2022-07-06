import React from "react";
import { useProductContext } from "../../Context/ProductContext";

const Products = () => {
  const { products } = useProductContext();

  return (
    <>
      <div className="products-container">{products}</div>
    </>
  );
};

export default Products;
