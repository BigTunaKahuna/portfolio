import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./TopButton.module.css";

const TopButton = props => (
  <div className={styles.TopButton}>
    <NavLink
      exact
      to={props.path}
      className={styles.Github}
      activeClassName={styles.Active}
    >
      <h2>{props.name}</h2>
    </NavLink>
  </div>
);

export default TopButton;
