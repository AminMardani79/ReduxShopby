import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "../assets/css/EmptyCart.module.css";
// images
import emptyCart from "../assets/img/empty.png";

const EmptyCart = () => {
  return (
    <div className={styles.emptyContainer}>
      <img className={styles.emptyImage} src={emptyCart} alt="cartImage" />
      <h3 className={styles.emptySubtitle}>Your shopping cart is empty</h3>
      <Link to="/products">Go Shopping</Link>
    </div>
  );
};

export default EmptyCart;
