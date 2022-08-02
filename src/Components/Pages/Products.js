import React from "react";
import  ShoppingCard from "../Products/Cart/ShoppingCart";
//import ProductsCard from "../Products/ProductsCard";
import Warenkorb from "./ShoppingCart"


import { useUser } from "../../Context/UserContext";







export default function Products() {
const token = useUser();
console.log("Token Pages: ", token.user)

  return (
    <>
      <div className="products-container" style={{ marginTop: "150px" }}>
      </div>
      {/* <ProductsCart /> */}
      <ShoppingCard />
{token.user &&
      (<><hr />
    <div className="mt-5 w-auto">
      <Warenkorb />
      </div></>)
      }

    </>
  );
}
