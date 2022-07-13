import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: "",
    products: [],
  },
  reducers: {
    fetchProductRequest: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductFailure: (state, action) => {
      state.products = [];
      state.error = action.payload;
    },
  },
});

export const { fetchProductFailure, fetchProductRequest, fetchProductSuccess } =
  productsSlice.actions;
export default productsSlice.reducer;
