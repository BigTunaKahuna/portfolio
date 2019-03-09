import React from "react";

import styles from "./TopBar.module.css";
import Buttons from "./TopBarButtons/TopBarButtons";

const TopBar = props => {
  return (
    <div className={styles.TopBar}>
      <div className={styles.Center}>Terminal</div>
      <div className={styles.Rigth}>
        <Buttons />
      </div>
    </div>
  );
};

export default TopBar;
