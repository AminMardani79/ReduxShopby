import React from "react";
// styles
import styles from "../assets/css/Customer.module.css";
// images
import google from "../assets/img/google.png";
import yahoo from "../assets/img/yahoo.png";
import amazon from "../assets/img/amazon.png";
import capitalOne from "../assets/img/capital-one.png";
// components
const Customers = () => {
  const customers = [google, yahoo, amazon, capitalOne];
  return (
    <div className={styles.customersContainer}>
      <header className={styles.customersHeader}>
        <h1>Trusted Customers</h1>
      </header>
      <div className={styles.customers}>
        {customers.map((item, index) => (
          <div key={index} className={styles.customerImage}>
            <img src={item} alt="customer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
