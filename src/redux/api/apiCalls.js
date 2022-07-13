import axios from "axios";
import {
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
} from "../products/productsSlice";
const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async (dispatch) => {
  dispatch(fetchProductRequest());
  try {
    const result = await axios.get(`${BASE_URL}/products`);
    dispatch(fetchProductSuccess(result.data));
  } catch (e) {
    dispatch(fetchProductFailure(e));
  }
};
export const getProduct = async (id) => {
  const product = await axios.get(`${BASE_URL}/products/${id}`);
  return product.data;
};
