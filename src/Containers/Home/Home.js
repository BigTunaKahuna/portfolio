import React, { Component } from "react";

import Terminal from "../../Components/Terminal/Terminal";
import styles from "./Home.module.css";
import Logo from "../../Components/Logo/Logo";
import TopButton from "../../Components/ButtonsTRBL/TopButton/TopButton";
import LeftButton from "../../Components/ButtonsTRBL/LeftButton/LeftButton";
import RightButton from "../../Components/ButtonsTRBL/RightButton/RightButton";
import BottomButon from "../../Components/ButtonsTRBL/BottomButton/BottomButton";
import HamburgerMenu from "../../Components/ButtonsTRBL/HamburgerMenu/HamburgerMenu";

class MainPage extends Component {
  render() {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.childHamburger}>
          <HamburgerMenu />
        </div>
        <div className={styles.childLogo}>
          <Logo />
        </div>
        <div className={styles.childGithub}>
          <TopButton path="/github" name="GITHUB" />
        </div>
        <div className={styles.childContact}>
          <LeftButton path="/contact" name="CONTACT" />
        </div>
        <div className={styles.childTerminal}>
          <Terminal />
        </div>
        <div className={styles.childAbout}>
          <RightButton path="/about" name="ABOUT" />
        </div>
        <div className={styles.childCV}>
          <BottomButon path="/cv" name="CV" />
        </div>
      </div>
    );
  }
}

export default MainPage;
