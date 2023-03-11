import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./SingUp.module.css";
import "./styles.css";
import { initialFormData, setDataFromLocalStorage } from "../../util/util";

const SingUpPage = () => {
  const [state, updateFormData] = useState(initialFormData);

  const colorRed = "rgb(255, 0, 0)";
  const colorGreen = "rgb(0, 255, 0)";

  const containsUppercase = (str) => {
    return Boolean(str.match(/[A-Z]/));
  };
  const containsLowercase = (str) => {
    return Boolean(str.match(/[a-z]/));
  };
  const containsEmails = (str) => {
    return Boolean(
      str.match(/^(([\w.%+-]{3,})+)@(([\w-]{2,})+\.)+([\w]{2,})$/i)
    );
  };

  const handleChange = (e) => {
    let value = e.target.value.trim();
    if (e.target.name === "isAgree") {
      value = e.target.checked ? true : false;
    }

    updateFormData({
      ...state,
      [e.target.name]: value,
    });

    if (e.target.name === "password") {
      value.length >= 8 && containsUppercase(value) && containsLowercase(value)
        ? (e.target.style.borderColor = colorGreen)
        : (e.target.style.borderColor = colorRed);
    }

    if (e.target.name === "email") {
      containsEmails(value)
        ? (e.target.style.borderColor = colorGreen)
        : (e.target.style.borderColor = colorRed);
    }

    if (e.target.name === "firstName" || e.target.name === "lastName") {
      value.length >= 3
        ? (e.target.style.borderColor = colorGreen)
        : (e.target.style.borderColor = colorRed);
    }
  };
  const handleSubmit = () => {
    setDataFromLocalStorage(state);
  };

  return (
    <TransitionGroup>
      <CSSTransition classNames="alert">
        <div className={styles["modal-wrapper"]}>
          <form className={styles["singup-form"]}>
            <div className={styles["logo"]}></div>
            <h4 className={styles["title"]}>Sing Up</h4>
            <div className={styles["logo-text"]}>
              <input
                type="text"
                className={styles["singup-input-text"]}
                placeholder="First Name *"
                name="firstName"
                onChange={handleChange}
              ></input>
              <input
                type="text"
                className={styles["singup-input-text"]}
                placeholder="Last Name *"
                name="lastName"
                onChange={handleChange}
              ></input>
            </div>
            <input
              type="email"
              className={styles["singup-input-email"]}
              placeholder="Email Address *"
              name="email"
              onChange={handleChange}
            ></input>
            <input
              type="password"
              className={styles["singup-input-password"]}
              placeholder="Password *"
              name="password"
              onChange={handleChange}
            ></input>
            <label className={styles["modal-checkbox-agree"]}>
              <input
                className={styles["input-check"]}
                type="checkbox"
                name="isAgree"
                onChange={handleChange}
              />
              <span className="checkbox-text">I want to receive inspiration, marketing
              <br /> promotions and updates via email</span>
            </label>
            <button
              type="submit"
              className={styles["btn-modal"]}
              onClick={handleSubmit}
            >
              SING UP
            </button>
            <div className={styles["wrapper_link"]}>
              <button type="button" className={styles["btn-link"]}>
                Already have an account? Sing in!
              </button>
            </div>
          </form>
          <div className={styles["footer"]}>
            Copyright &#169; Your Website 2023
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default SingUpPage;
