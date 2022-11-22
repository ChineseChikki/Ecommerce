import React from "react";
import "./customstyles/main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/helpers";
import CreateCategory from "./pages/createCategory";
import Order from "./pages/order/Order";
import Create from "./pages/createProduct/index";
import ProductsProvider from "./contexts/products";
import CategoriesProvider from "./contexts/category";
import CheckOut from "./pages/CheckOut";
import OrderProvider from "./contexts/order";
import ProductHistory from "./pages/order/ProductHistory";
import {
  Home,
  Error,
  Cart,
  Products,
  SingleProduct,
  PrivateRoute,
  Login,
  SignUp,
} from "./pages";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product"
          element={
            <ProductsProvider>
              <CategoriesProvider>
                <Create />
              </CategoriesProvider>
            </ProductsProvider>
          }
        />
        <Route path="/category" element={<CreateCategory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="checkout"
          element={
            <PrivateRoute>
              <OrderProvider>
                <CheckOut />
              </OrderProvider>
            </PrivateRoute>
          }
        />

        <Route path="/history" element={<ProductHistory />} />

        <Route
          path="/order"
          element={
            <OrderProvider>
              {" "}
              <Order />{" "}
            </OrderProvider>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
