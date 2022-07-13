import { createSlice } from "@reduxjs/toolkit";
import { sumItems } from "../../helpers/functions";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedItems: [],
    total: 0,
    itemsCounter: 0,
    checkout: false,
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.checkout = false;
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
    },
    increase: (state, action) => {
      state.selectedItems.find((item) => item.id === action.payload.id)
        .quantity++;
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
    },
    decrease: (state, action) => {
      const item = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity--;
      if (item.quantity === 0) {
        const newItems = state.selectedItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.selectedItems = [...newItems];
      }
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
    },
    removeItem: (state, action) => {
      const newItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = [...newItems];
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.checkout = true;
      state.itemsCounter = 0;
      state.total = 0;
    },
    clear: (state) => {
      state.selectedItems = [];
      state.checkout = false;
      state.itemsCounter = 0;
      state.total = 0;
    },
  },
});
export const { addItem, increase, decrease, removeItem, checkout, clear } =
  cartSlice.actions;
export default cartSlice.reducer;
