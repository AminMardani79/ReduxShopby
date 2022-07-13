import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import Loading from "../components/shared/Loading";
// Redux
import { useSelector, useDispatch } from "react-redux";
// styles
import styles from "../assets/css/Details.module.css";
// functions
import { shorten, getQuantity, isInCart } from "../helpers/functions";
// api
import { getProduct } from "../redux/api/apiCalls";
import { addItem, decrease, increase, removeItem } from "../redux/cart/cart";

const ProductDetailes = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const state = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProduct(params.id));
    };
    fetchProduct();
  });
  return (
    <>
      {product ? (
        <section className={styles.detailsContainer}>
          <div className={styles.detailsImage}>
            <img src={product.image} alt="productImage" />
          </div>
          <div className={styles.detailsInfo}>
            <h5 className={styles.detailsCategory}>{product.category}</h5>
            <h3 className={styles.detailsTitle}>{shorten(product.title)}</h3>
            <p className={styles.detailsDescription}>{product.description}</p>
            <div className={styles.detailFeatures}>
              <h3>features</h3>
              <ul className={styles.featureList}>
                <li>
                  <span>rate :</span>
                  <span>{product.rating.rate}/5</span>
                </li>
                <li>
                  <span>price :</span>
                  <span>{product.price} $</span>
                </li>
                <li>
                  <span>count :</span>
                  <span>{product.rating.count}</span>
                </li>
              </ul>
            </div>
            <div className={styles.addToCart}>
              {isInCart(state, product.id) ? (
                <button
                  type="button"
                  className={styles.increase}
                  onClick={() => dispatch(increase(product))}
                >
                  +
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => dispatch(addItem(product))}
                >
                  Add to cart
                </button>
              )}
              {getQuantity(state, product.id) === 1 && (
                <button
                  type="button"
                  className={styles.decrease}
                  onClick={() => dispatch(removeItem(product))}
                >
                  -
                </button>
              )}
              {getQuantity(state, product.id) > 1 && (
                <button
                  type="button"
                  className={styles.decrease}
                  onClick={() => dispatch(decrease(product))}
                >
                  -
                </button>
              )}
            </div>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductDetailes;
