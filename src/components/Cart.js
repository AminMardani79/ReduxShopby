import React from "react";
// styles
import styles from "../assets/css/Cart.module.css";
// components
import { DeleteIcon } from "./CartElements";
// Redux
import { useDispatch } from "react-redux";
// functions
import { shorten } from "../helpers/functions";
import { Link } from "react-router-dom";
import { decrease, increase, removeItem } from "../redux/cart/cart";

const Cart = ({ cartData }) => {
  const dispatch = useDispatch();
  const { id, title, image, price, quantity } = cartData;
  return (
    <section className={styles.cartItemContainer}>
      <div className={styles.cartImage}>
        <Link to={`/productDetails/${id}`}>
          <img src={image} alt="cartimage" />
        </Link>
      </div>
      <div className={styles.cartInfo}>
        <div className={styles.cartTitle}>
          <Link to={`/productDetails/${id}`}>
            <h4>{shorten(title)}</h4>
          </Link>
          <span>{(price * quantity).toFixed(2)} $</span>
        </div>
        <div className={styles.changeState}>
          <div className={styles.changeCount}>
            <button type="button" onClick={() => dispatch(decrease(cartData))}>
              -
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => dispatch(increase(cartData))}>
              +
            </button>
          </div>
          <div className={styles.removeCart}>
            <button
              type="button"
              onClick={() => dispatch(removeItem(cartData))}
            >
              <DeleteIcon /> Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
