import React from "react";
import { Link } from "react-router-dom";
// styles
import styles from "../../assets/css/Product.module.css";
// funcitons
import { shorten, isInCart, getQuantity } from "../../helpers/functions";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../../redux/cart/cart";
const Product = ({ productData }) => {
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const { image, title, price, id } = productData;
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <Link to={`/productDetails/${id}`}>
            <img src={image} alt="product" />
          </Link>
        </div>
        <div className={styles.productName}>
          <Link to={`/productDetails/${id}`}>{shorten(title)}</Link>
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productPrice}>{price} $</span>
          {getQuantity(state, id) > 0 && (
            <span className={styles.productCount}>
              {getQuantity(state, id)}
            </span>
          )}
          <div className={styles.basket}>
            {isInCart(state, id) ? (
              <button
                onClick={() => dispatch(increase(productData))}
                className={styles.increase}
              >
                +
              </button>
            ) : (
              <button
                onClick={() => dispatch(addItem(productData))}
                className={styles.addItem}
              >
                Add to basket
              </button>
            )}
            {getQuantity(state, id) === 1 && (
              <button
                onClick={() => dispatch(removeItem(productData))}
                className={styles.decrease}
              >
                -
              </button>
            )}
            {getQuantity(state, id) > 1 && (
              <button
                onClick={() => dispatch(decrease(productData))}
                className={styles.decrease}
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
