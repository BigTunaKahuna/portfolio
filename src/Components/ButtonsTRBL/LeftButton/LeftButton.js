import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./LeftButton.module.css";

const LeftButton = props => (
  <div className={styles.LeftButton}>
    <NavLink
      exact
      to={props.path}
      className={styles.Contact}
      activeClassName={styles.Active}
    >
      <h2>{props.name}</h2>
    </NavLink>
  </div>
);

export default LeftButton;
