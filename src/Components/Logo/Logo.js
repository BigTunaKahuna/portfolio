import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.Logo}>
    <NavLink
      exact
      className={styles.NotActive}
      activeClassName={styles.Active}
      to="/"
    >
      <h1>CM/</h1>
    </NavLink>
  </div>
);

export default Logo;
