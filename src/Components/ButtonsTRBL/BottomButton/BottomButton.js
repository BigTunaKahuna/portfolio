import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./BottomButton.module.css";

const BottomButon = props => (
  <div className={styles.BottomButton}>
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

export default BottomButon;
