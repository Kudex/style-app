import React from "react";
import { Route, Routes as ReactRouterRouts } from "react-router-dom";
import Nav from "../components/Nav";
import HomePage from "../pages/home/Home.page";
import SingInPage from "../pages/singIn/SingIn.page";
import SingUpPage from "../pages/singUp/SingUp.page";
import styles from "./Route.module.css";

export const appRouts = {
  home: {
    id: 1,
    path: "/style-app/",
    element: <HomePage />,
  },
  singIn: {
    id: 2,
    path: "/style-app/singin",
    element: <SingInPage />,
  },
  singUp: {
    id: 2,
    path: "/style-app/singup",
    element: <SingUpPage />,
  },
};

const Routes = () => {
  return (
    <div className={styles["container"]}>
      <Nav />
      <ReactRouterRouts>
        {Object.values(appRouts).map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </ReactRouterRouts>
    </div>
  );
};

export default Routes;
