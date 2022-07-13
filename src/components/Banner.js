import React from "react";
// Images
import bannerImage from "../assets/img/shopBanner.png";
// Styles
import styles from "../assets/css/Banner.module.css";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerImages}>
        <img src={bannerImage} alt="banner" />
      </div>
      <div className={styles.bannerContent}>
        <h2>Orders delivered to your door</h2>
        <p>Enjoy shopping with shopby</p>
        <Link to="/products">Browse Products</Link>
      </div>
    </div>
  );
};

export default Banner;
