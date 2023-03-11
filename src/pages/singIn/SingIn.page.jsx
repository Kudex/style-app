import React, { useEffect, useState } from "react";
import styles from "./SingIn.module.css";
import {
  initialFormData,
  setDataFromLocalStorage,
  getDataFromLocalStorage,
} from "../../util/util";

const SingInPage = () => {
  const [state, updateFormData] = useState(initialFormData);
  useEffect(() => {
    const { password, email, isRemember } = getDataFromLocalStorage();
    if (isRemember) {
      state.password = password;
      state.email = email;
      state.isRemember = isRemember;
    }
  }, state);

  const handleChange = (e) => {
    let valueTarget = e.target.value.trim();
    if (e.target.name === "isRemember") {
      valueTarget = e.target.checked ? true : false;
    }
    updateFormData({
      ...state,
      [e.target.name]: valueTarget,
    });
  };

  const handleSubmit = () => {
    const Previos = getDataFromLocalStorage();
    if (state.email === Previos.email && state.password === Previos.password) {
      if (state.isRemember !== Previos.isRemember) {
        Previos.isRemember = state.isRemember;
        setDataFromLocalStorage(Previos);
      }
      alert("Congratulates!!! Your authorization is successful!");
    } else {
      alert("You are not authorisation, repeat please!");
    }
  };

  return (
    <div className={styles["modal-wrapper"]}>
      <form className={styles["form"]}>
        <div className={styles["img"]}></div>
        <h4 className={styles["title"]}>Sing In</h4>
        <input
          type="email"
          className={styles["singin-input-text"]}
          placeholder="Email Address *"
          name="email"
          defaultValue={state.email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          className={styles["singin-input-pass"]}
          placeholder="Password *"
          name="password"
          defaultValue={state.password}
          onChange={handleChange}
        ></input>
        <label className={styles["modal-checkbox-rememberMe"]}>
          <input
            className={styles["input-check"]}
            type="checkbox"
            name="isRemember"
            defaultChecked={state.isRemember}
            onChange={handleChange}
          />
          Remember me
        </label>
        <button
          type="submit"
          className={styles["btn-modal"]}
          onClick={handleSubmit}
        >
          SING IN
        </button>
        <div className={styles["wrapper-link"]}>
          <a href="" className={styles["link"]}>
            Do you forgot  the password?
          </a>
          <button type="button" className={styles["btn-link"]}>
            Dont have an account? Sing up!
          </button>
        </div>
      </form>
      <div className={styles["footer"]}>
        Copyright &#169; Your Website 2023
      </div>
    </div>
  );
};

export default SingInPage;
