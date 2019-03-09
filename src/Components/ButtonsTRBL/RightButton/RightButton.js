import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./RightButton.module.css";

const RightButton = props => (
  <div className={styles.RightButton}>
    <NavLink
      exact
      to={props.path}
      className={styles.About}
      activeClassName={styles.Active}
    >
      <h2>{props.name}</h2>
    </NavLink>
  </div>
);

export default RightButton;
