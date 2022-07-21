import React from "react";
import ComponentShoppingCart from "../../Components/Products/ComponentShoppingCart";
//import Container from 'react-bootstrap/Container';
// import Footer from "../Footer/Footer";
import "../../sass/ShoppingCart.scss";

export default function Category() {
  return (
    <>
    <div style={{marginTop: "100px"}}>
      
    <h1>Angebote</h1>
      
       <div className="d-flex ">
        <div className="d-flex flex-wrap"> 
      <ComponentShoppingCart />
      </div>
      </div> 
    </div>
    </>
  );
}
