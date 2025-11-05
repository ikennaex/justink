import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./ecommerce/Contexts/CartContext.jsx";
import { UserProvider } from "./ecommerce/Contexts/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
