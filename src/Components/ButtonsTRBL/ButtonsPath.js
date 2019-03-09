import React from "react";

import styles from "./ButtonsPath.module.css";
import TopButton from "./TopButton/TopButton";
import BottomButon from "./BottomButton/BottomButton";
import LeftButton from "./LeftButton/LeftButton";
import RightButton from "./RightButton/RightButton";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const ButtonsPath = props => (
  <React.Fragment>
    <HamburgerMenu className={styles.Hamburger} />
    <TopButton path="/github" name="GITHUB" />
    <BottomButon path="/cv" name="CV" />
    <LeftButton path="/contact" name="CONTACT" />
    <RightButton path="/about" name="ABOUT" />
  </React.Fragment>
);

export default ButtonsPath;
