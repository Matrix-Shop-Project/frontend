import { Typography } from "@mui/material";
//import { margin } from "@mui/system";
import React from "react";
import { useCart } from "react-use-cart";
import "../../sass/ShoppingCart.scss";

const ProductCart = () => {


  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <div className="products-container">
      <h1>Cart ({totalUniqueItems})</h1>
      <div>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              alt=""
              width={100}
            />
            <div>
              <Typography
                className="shopping-cart-container__title"
                gutterBottom
                variant="h5"
                component="div"
              >
                {item.description}
              </Typography>
              <Typography>
                {item.quantity} x {item.name}
              </Typography>
            </div>
            <div>
              <button
                style={{
                  margin: "5px",
                  padding: "5px",
                  backgroundColor: "red",
                  borderRadius: "5px",
                }}
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                Delete 1
              </button>
              {item.quantity}
              <button
                style={{
                  margin: "5px",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#43A047",
                }}
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                Add 1
              </button>
              <button
                style={{
                  margin: "5px",
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "red",
                }}
                onClick={() => removeItem(item.id)}
              >
                Delete All {/* &times; */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
