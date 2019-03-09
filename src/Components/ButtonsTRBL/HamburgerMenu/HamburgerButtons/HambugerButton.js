import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./HamburgerButton.module.css";

const HamburgerButton = props => (
  <div className={styles.HamburgerButton}>
    <NavLink
      exact
      to={props.path}
      className={styles.HamburgerButton}
      activeClassName={styles.Active}
    >
      <h2>{props.name}</h2>
    </NavLink>
  </div>
);

export default HamburgerButton;
