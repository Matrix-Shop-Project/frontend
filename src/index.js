import React from "react";
import { UserContextProvider } from "./Context/UserContext";


import App from "./App";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <UserContextProvider>
  <App />
  </UserContextProvider>
</React.StrictMode>);