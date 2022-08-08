import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/apiCalls";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: "",
    products: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;
    });
  },
});
export default productsSlice.reducer;
