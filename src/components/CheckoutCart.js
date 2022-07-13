import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "../assets/css/CheckoutCart.module.css";
// images
import successful from "../assets/img/successful.jpg";

const CheckoutCart = () => {
  return (
    <div className={styles.checkoutContainer}>
      <img
        className={styles.successfulImage}
        src={successful}
        alt="successful"
      />
      <h4 className={styles.successfulSubTitle}>
        Your shopping successfuly done
      </h4>
      <Link to="/products">More Shopping</Link>
    </div>
  );
};

export default CheckoutCart;
