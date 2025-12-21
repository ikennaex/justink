import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./Contexts/CartContext.jsx";
import { UserProvider } from "./Contexts/UserContext.jsx";
import { RiderAuthProvider } from "./Contexts/RiderContext.jsx";
import { AdminAuthProvider } from "./Contexts/AdminContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <RiderAuthProvider>
            <AdminAuthProvider>
              <App />
            </AdminAuthProvider>
          </RiderAuthProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
