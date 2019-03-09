import React from "react";

import styles from "./HamburgerMenu.module.css";
import HamburgerButton from "./HamburgerButtons/HambugerButton";

const HamburgerMenu = props => (
  <nav role="navigation">
    <div className={styles.menuToggle} onClick={props.clicked}>
      <input type="checkbox" />

      <span />
      <span />
      <span />

      <ul className={styles.menu}>
        <li>
          <HamburgerButton path="/" name="HOME" />
        </li>
        <li>
          <HamburgerButton path="/github" name="GITHUB" />
        </li>
        <li>
          <HamburgerButton path="/cv" name="CV" />
        </li>
        <li>
          <HamburgerButton path="/contact" name="CONTACT" />
        </li>
        <li>
          <HamburgerButton path="/about" name="ABOUT" />
        </li>
      </ul>
    </div>
  </nav>
);

export default HamburgerMenu;
