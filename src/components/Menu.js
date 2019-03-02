import React, { useState } from "react";
import styles from "../CSS/menu.styl";
export default function Menu() {
  const [state, setState] = useState({
    pizza: true
  });
  const { pizza } = state;
  const changeMenu = e => {
    e.preventDefault();
    setState({
      pizza: !state.pizza
    });
  };

  return (
    <div className={styles["menu"]}>
      <div className={styles["menu__nav"]}>
        <div className={styles["menu__header"]}>
          <img
            className={styles["menu__img"]}
            src="../../public/images/menu_image.jpeg"
          />
          <h1>{pizza ? "Pizza" : "Sides"}</h1>
        </div>
        <div className={styles["menu__main-nav"]}>
          <a href="#">Large</a>
          <a href="#">Medium</a>
          <a href="#">Small</a>
        </div>
      </div>
      <div className={styles["menu__main"]}>
        <div className={styles["menu__title"]}>
          <h1>Menu</h1>
        </div>
        <ul>
          <li>
            Cheese: <div /> <span>0.00</span>
          </li>
          <li>
            Pepporni: <div /> <span>0.00</span>
          </li>
          <li>
            Hamburger: <div /> <span>0.00</span>
          </li>
        </ul>
        <button onClick={changeMenu}>
          {pizza ? "Pizza Menu" : "Sides Menu"}{" "}
        </button>
      </div>
    </div>
  );
}
