import React from "react";
import Carts from "../components/Carts";
import CheckoutCart from "../components/CheckoutCart";
import EmptyCart from "../components/EmptyCart";
// Redux
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const state = useSelector((state) => state.cartState);
  return (
    <div>
      {state.itemsCounter > 0 && !state.checkout && <Carts />}
      {state.itemsCounter === 0 && !state.checkout && <EmptyCart />}
      {state.itemsCounter === 0 && state.checkout && <CheckoutCart />}
    </div>
  );
};

export default ShoppingCart;
