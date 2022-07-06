import React from "react";
import { createRoot } from "react-dom/client";
import { UserContextProvider } from "./Context/UserContext";
import { ProductContextProvider } from "./Context/ProductContext";
import App from "./App";
import { AdminContextProvider } from "./Context/AdminContext";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    </UserContextProvider>
    <AdminContextProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </UserContextProvider>
    </AdminContextProvider>
  </React.StrictMode>
);
