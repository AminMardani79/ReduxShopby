import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/api/apiCalls";
import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import Products from "./Products";
import Home from "./Home";
import Footer from "../components/Footer";
import ShoppingCart from "./ShoppingCart";
import ProductDetailes from "./ProductDetailes";
// Components
import Navbar from "../components/Navbar/Navbar";

const Landing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  });
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/productDetails/:id" element={<ProductDetailes />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
