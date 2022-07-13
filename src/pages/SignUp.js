import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../helpers/notify";
import { validate } from "../helpers/validate";
import { Link } from "react-router-dom";
// styles
import styles from "../assets/css/SignUp.module.css";
// icons
import { MdHome } from "react-icons/md";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [touch, setTouch] = useState({});
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.values(errors).length) {
      notify("error", "Enter valid data");
      setErrorMessage({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    } else {
      notify("success", "You are successfuly signed up");
    }
  };
  useEffect(() => {
    setErrors(validate(data, "signup"));
  }, [data]);
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const BlurHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: false });
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler}>
        <h1 className={styles.formHeader}>SignUp</h1>
        <div className={styles.inputField}>
          <input
            className={`${!touch.name && data.name && styles.touchedInput} ${
              errors.name && errorMessage.name && styles.invalidInput
            }`}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={BlurHandler}
          />
          <label className={data.name && styles.activeLabel}>Name</label>
          {errors.name && errorMessage.name && (
            <span>
              <span className={styles.errorIcon}>!</span>
              {errors.name}
            </span>
          )}
        </div>
        <div className={styles.inputField}>
          <input
            className={`${!touch.email && data.email && styles.touchedInput} ${
              errors.email && errorMessage.email && styles.invalidInput
            }`}
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={BlurHandler}
          />
          <label className={data.email && styles.activeLabel}>Email</label>
          {errors.email && errorMessage.email && (
            <span>
              <span className={styles.errorIcon}>!</span>
              {errors.email}
            </span>
          )}
        </div>
        <div className={styles.inputField}>
          <input
            className={`${
              !touch.password && data.password && styles.touchedInput
            } ${
              errors.password && errorMessage.password && styles.invalidInput
            }`}
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={BlurHandler}
          />
          <label className={data.password && styles.activeLabel}>
            Password
          </label>
          {errors.password && errorMessage.password && (
            <span>
              <span className={styles.errorIcon}>!</span>
              {errors.password}
            </span>
          )}
        </div>
        <div className={styles.inputField}>
          <input
            className={`${
              !touch.confirmPassword &&
              data.confirmPassword &&
              styles.touchedInput
            } ${
              errors.confirmPassword &&
              errorMessage.confirmPassword &&
              styles.invalidInput
            } `}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
            onBlur={BlurHandler}
          />
          <label className={data.confirmPassword && styles.activeLabel}>
            ConfirmPassword
          </label>
          {errors.confirmPassword && errorMessage.confirmPassword && (
            <span>
              <span className={styles.errorIcon}>!</span>
              {errors.confirmPassword}
            </span>
          )}
        </div>
        <div className={styles.checkBoxField}>
          <div>
            <label>I accept terms of privacy policy</label>
            <input
              type="checkbox"
              name="isAccepted"
              checked={data.isAccepted}
              onChange={changeHandler}
            />
          </div>
          {errors.isAccepted && errorMessage.name && (
            <span>
              <span className={styles.errorIcon}>!</span>
              {errors.isAccepted}
            </span>
          )}
        </div>
        <div className={styles.formButtons}>
          <Link to="/login">Login</Link>
          <Link to="/">
            <MdHome className={styles.homeIcon} />
          </Link>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
