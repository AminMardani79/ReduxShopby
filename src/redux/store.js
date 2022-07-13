import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cart";

export const store = configureStore({
  reducer: {
    productsState: productsReducer,
    cartState: cartReducer,
  },
});
