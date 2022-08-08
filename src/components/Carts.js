import React, { useEffect, useState } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { checkout, clear } from "../redux/cart/cart";
// Routing
import { Link } from "react-router-dom";
// styles
import styles from "../assets/css/Carts.module.css";
// components
import Cart from "./Cart";
const Carts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartState);
  const [input, setInput] = useState("");
  const [total, setTotal] = useState(state.total);
  const [discount, setDiscount] = useState(20);
  const [discountCode, setDiscountCode] = useState("abc");
  const remainPercent = 100 - discount;
  let finalPrice = (state.total * remainPercent) / 100;
  const ApplyDiscount = () => {
    if (input === discountCode) {
      setTotal(finalPrice);
      setInput("");
    }
  };
  const changeHandler = (event) => {
    setInput(event.target.value);
  };
  useEffect(() => {
    setTotal(state.total);
  }, [state]);
  return (
    <div className={styles.CartContainer}>
      <section className={styles.itemsContainer}>
        <div className={styles.itemsScope}>
          <header className={styles.cartHeader}>
            <h3>Cart</h3>
            <button type="button" onClick={() => dispatch(clear())}>
              Clear
            </button>
          </header>
          <div className={styles.cartItems}>
            {state.selectedItems.map((item) => {
              return (
                item.quantity > 0 && <Cart key={item.id} cartData={item} />
              );
            })}
          </div>
        </div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.infoScope}>
          <div className={styles.infoDiscount}>
            <div>
              <input
                placeholder="discount"
                value={input}
                onChange={changeHandler}
              />
              <button
                type="button"
                onClick={ApplyDiscount}
                className={styles.applyDiscount}
              >
                Apply
              </button>
            </div>
            <span>20% of discount</span>
          </div>
          <div className={styles.infoPrice}>
            <span>Total</span>
            <span>{total.toFixed(2)} $</span>
          </div>
          <div className={styles.infoCheckout}>
            <button type="button" onClick={() => dispatch(checkout())}>
              Proceed to checkout
            </button>
            <Link to="/products">Go Shopping</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carts;
