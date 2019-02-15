import React, { Component } from "react";
import styles from "../CSS/navbar.styl";
class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className={styles["navbar__main"]}>
          <div className={styles["navbar__section-1"]}>
            <a href="#" className={styles["navbar__link"]}>
              Home
              <span />
            </a>
            <a href="#" className={styles["navbar__link"]}>
              About
              <span />
            </a>
          </div>
          <div className={styles["logo__wrap"]}>
            <img
              className={styles["logo"]}
              src="../../public/images/pizza.png"
              alt="Pizza"
            />
          </div>
          <div className={styles["navbar__section-2"]}>
            <a href="#" className={styles["navbar__link"]}>
              Menu
              <span />
            </a>
            <a href="#" className={styles["navbar__link"]}>
              Contact
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
