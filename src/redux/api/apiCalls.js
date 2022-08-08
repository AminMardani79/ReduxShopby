import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = createAsyncThunk("products", async () => {
  const products = await axios.get(`${BASE_URL}/products`);
  return products.data;
});
export const getProduct = async (id) => {
  const product = await axios.get(`${BASE_URL}/products/${id}`);
  return product.data;
};
