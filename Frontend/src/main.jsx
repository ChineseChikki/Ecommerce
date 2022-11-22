import React from "react";
import ReactDOM from "react-dom/client";
import { ProductsProvider } from "./contexts/products_context";
import { FilterProvider } from "./contexts/filter_context";
import { CartProvider } from "./contexts/cart_context";
import { UserProvider } from "./contexts/user_context";
import App from "./App";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
