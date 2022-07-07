import React from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./Context/UserContext";
import { ProductContextProvider } from "./Context/ProductContext";
import App from "./App";
import { AdminContextProvider } from "./Context/AdminContext";
import { CartProvider } from "react-use-cart";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AdminContextProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </AdminContextProvider>
  </React.StrictMode>
);
