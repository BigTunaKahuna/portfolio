import React from "react";

import styles from "./Github.module.css";
import Path from "../../Components/UI/Path/Path";
import Logo from "../../Components/Logo/Logo";
import HamburgerMenu from "../../Components/ButtonsTRBL/HamburgerMenu/HamburgerMenu";

const Github = () => (
  <React.Fragment>
    <div className={styles.gridContainer}>
      <div className={styles.childPath}>
        <Path pathName={"GITHUB"} />
      </div>
      <div className={styles.childNav}>
        <HamburgerMenu />
        <Logo />
      </div>
    </div>
  </React.Fragment>
);

export default Github;
