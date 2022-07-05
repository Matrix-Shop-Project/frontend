import React from "react";
import { AdminContextProvider } from "./Context/AdminContext";
import { UserContextProvider } from "./Context/UserContext";

import App from "./App";

import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AdminContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </AdminContextProvider>
  </React.StrictMode>
);
