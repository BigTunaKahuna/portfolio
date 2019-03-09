import React from "react";

import styles from "./Path.module.css";
import Logo from "../../Logo/Logo";
import HamburgerMenu from "../../ButtonsTRBL/HamburgerMenu/HamburgerMenu";

const Path = props => {
  return (
    <React.Fragment>
      <div className={styles.Phone}>
        <HamburgerMenu />
        <div className={styles.LogoPathMobile}>
          <div className={styles.Space} />
          <div className={styles.LogoFlex}>
            <Logo /> <p>{props.pathName}</p>
          </div>
        </div>
      </div>
      <div className={styles.LogoPath}>
        <Logo /> <p>{props.pathName}</p>
      </div>
    </React.Fragment>
  );
};

export default Path;
