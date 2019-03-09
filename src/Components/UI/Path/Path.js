import React from "react";

import styles from "./Path.module.css";
import Logo from "../../Logo/Logo";

const Path = props => {
  return (
    <React.Fragment>
      <div className={styles.LogoPath}>
        <Logo /> <p>{props.pathName}</p>
      </div>
    </React.Fragment>
  );
};

export default Path;
