import React, { Component } from "react";
import Media from "react-media";
import classnames from "classnames";
import styles from "../CSS/navbar.styl";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  // Toggles the menu (mobile devices only.)
  toggleNav = () => {
    this.setState({
      active: !this.state.active
    });
  };
  render() {
    const { active } = this.state;
    return (
      <Media query="(max-width: 968px)">
        {matches =>
          matches ? (
            // Mobile Navigation
            <nav
              className={classnames({
                [styles["navbar__main-mobile"]]: true,
                [styles["active"]]: active
              })}
            >
              <a
                className={classnames({
                  [styles["navbar__collapse-btn"]]: true,
                  [styles["active"]]: active
                })}
                onClick={this.toggleNav}
              >
                <span />
                <span />
                <span />
              </a>
              <div className={styles["navbar__mobile-img"]}>
                <img src="../../public/images/pizza.png" alt="" />
              </div>
              <div
                className={classnames({
                  [styles["navbar__wrap"]]: true,
                  [styles["active"]]: active
                })}
              >
                <a className={styles["navbar__link-mobile"]} href="#">
                  Home
                </a>
                <a className={styles["navbar__link-mobile"]} href="#about">
                  About
                </a>
                <a className={styles["navbar__link-mobile"]} href="#menu">
                  Menu
                </a>
                <a className={styles["navbar__link-mobile"]} href="#contact">
                  Contact
                </a>
              </div>
            </nav>
          ) : (
            // Desktop Navigation
            <nav className={styles["navbar__main"]}>
              <div className={styles["navbar__section-1"]}>
                <a href="#" className={styles["navbar__link"]}>
                  Home
                  <span />
                </a>
                <a href="#about" className={styles["navbar__link"]}>
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
                <a href="#menu" className={styles["navbar__link"]}>
                  Menu
                  <span />
                </a>
                <a href="#contact" className={styles["navbar__link"]}>
                  Contact
                  <span />
                </a>
              </div>
            </nav>
          )
        }
      </Media>
    );
  }
}

export default Navbar;
