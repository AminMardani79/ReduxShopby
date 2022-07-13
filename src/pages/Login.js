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

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
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
        email: true,
        password: true,
      });
    } else {
      notify("success", "You are successfuly logged in");
    }
  };
  useEffect(() => {
    setErrors(validate(data, "login"));
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
        <h1 className={styles.formHeader}>Login</h1>
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
        <div className={styles.formButtons}>
          <Link to="/signup">SignUp</Link>
          <Link to="/">
            <MdHome className={styles.homeIcon} />
          </Link>
          <button type="submit">Login</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
