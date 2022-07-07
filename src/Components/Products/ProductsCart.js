import React from "react";
import { useCart } from "react-use-cart";

import { useProductContext } from "../../Context/ProductContext";

const ProductsCart = () => {
  const { addItem } = useCart();

  const { products } = useProductContext();

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <button onClick={() => addItem({...p, id: p._id})}>{p.name} - Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsCart;
