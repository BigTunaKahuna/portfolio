import React from "react";

import TopBar from "./TopBar/TopBar";
import styles from "./Terminal.module.css";
import MainWindow from "./MainWindow/MainWindow";

const Terminal = props => {
  return (
    <div className={styles.Terminal}>
      <TopBar />
      <MainWindow />
    </div>
  );
};

export default Terminal;
