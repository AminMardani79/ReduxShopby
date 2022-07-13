import React from "react";
// styles
import styles from "../assets/css/Footer.module.css";
// images
import footerLogo from "../assets/img/footerLogo.png";
// icons
import { Instagram, Email, FaceBook } from "./FooterElements";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSections}>
        <div className={styles.footerLogo}>
          <img src={footerLogo} alt="logo" />
        </div>
        <div className={styles.footerList}>
          <ul>
            <li>
              <a href="#">Rentals</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Remote/Virtual Rents</a>
            </li>
            <li>
              <a href="#">Contact Team</a>
            </li>
            <li>
              <a href="#">List your gear</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">How it works</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#">
            <Email />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <FaceBook />
          </a>
        </div>
      </div>
      <div>
        <div className={styles.footerRules}>
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
