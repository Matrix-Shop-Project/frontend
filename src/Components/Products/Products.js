import React from "react";
import { useProductContext } from "../../Context/ProductContext";

const Products = () => {
  const { products } = useProductContext();

  return (
    <>
      <div className="products-container">{JSON.stringify(products[0].name)}</div>
    </>
  );
};

export default Products;

