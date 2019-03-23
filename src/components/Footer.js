import React from "react";
import styles from "../CSS/footer.styl";
// Footer Functional Component
const Footer = function Footer() {
  return (
    <footer className={styles["footer__main"]}>
      <div className={styles["footer__flex"]}>
        <div className={styles["footer__section"]}>
          <h3>Main Menu</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#menu"> Menu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles["footer__section"]}>
          <h3>Visit Us</h3>
          <ul>
            <li>Address: 123 Dummy Address Road, James UI USA, 55555</li>
            <li>Phone Number: 555-555-5555</li>
            <li>Email: dummyemail@pizzaincorperated.com</li>
          </ul>
        </div>
        <div className={styles["footer__section"]}>
          <h3>Follow Us</h3>
          <ul className={styles["footer__social"]}>
            <li className={styles["footer__social-icons"]}>
              <img src="../public/images/facebook.png" alt="Facebook" />
            </li>
            <li className={styles["footer__social-icons"]}>
              <img src="../public/images/twitter.png" alt="Twitter" />
            </li>
            <li className={styles["footer__social-icons"]}>
              <img src="../public/images/instagram.png" alt="Instagram" />
            </li>
          </ul>
        </div>

        <p className={styles["footer__copy"]}>
          &copy; 2019 Pizza Incorperated All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
