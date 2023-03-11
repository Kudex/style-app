
import React from "react";
import { appRouts } from "../routes/Routes";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styles["navbar"]}> 
      <Link to={appRouts.home.path}>Home</Link>
      <Link to={appRouts.singIn.path}>Sing In</Link>
      <Link to={appRouts.singUp.path}>Sing Up</Link>
    </header>
  );
};

export default Nav;
