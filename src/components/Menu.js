import React, { useState } from "react";
import data from "../data/data.json";
import classNames from "classnames";
import styles from "../CSS/menu.styl";
export default function Menu() {
  // States (Thanks to React 16.8 (and above) we can have states in functional components)
  const [state, setState] = useState({
    pizza: true,
    size: "small",
    priceAdd: null
  });
  const { pizza, size } = state;

  // Changes the menu. Pizza or side dish.
  const changeMenu = e => {
    e.preventDefault();
    setState({
      ...state,
      pizza: !state.pizza
    });
  };

  // Changes the price based off of the size of the item.
  const priceCal = price => {
    switch (size) {
      case "small": {
        return price - 1;
      }
      case "medium": {
        return price;
      }
      case "large": {
        return price + 1;
      }
      default: {
        return price;
      }
    }
  };

  // Renders all the items based off of the type of menu. (Rather it is pizza menu or sides menu)
  const renderData = () => {
    const menuRender = data.filter(data => data.pizza === pizza);
    console.log(menuRender);
    return menuRender.map((data, index) => (
      <li key={index}>
        {data.name}: <div /> <span>{priceCal(data.price).toFixed(2)}</span>
      </li>
    ));
  };

  // Changes the size of the menu. (Highest: Large, Lowest: Small)
  const changeSize = (e, size) => {
    e.preventDefault();
    return setState({
      ...state,
      size
    });
  };
  return (
    <div className={styles["menu"]} id="menu">
      <div className={styles["menu__nav"]}>
        <div className={styles["menu__header"]}>
          <img
            className={styles["menu__img"]}
            src="../../public/images/menu_image.jpeg"
          />
          <h1>{pizza ? "Pizza" : "Sides"}</h1>
        </div>
        <div className={styles["menu__main-nav"]}>
          <a
            href="#"
            className={classNames({ [styles["active"]]: size === "large" })}
            onClick={e => changeSize(e, "large")}
          >
            Large
          </a>
          <a
            href="#"
            className={classNames({ [styles["active"]]: size === "medium" })}
            onClick={e => changeSize(e, "medium")}
          >
            Medium
          </a>
          <a
            href="#"
            className={classNames({ [styles["active"]]: size === "small" })}
            onClick={e => changeSize(e, "small")}
          >
            Small
          </a>
        </div>
      </div>
      <div className={styles["menu__main"]}>
        <div className={styles["menu__title"]}>
          <h1>Menu</h1>
        </div>
        <ul>{renderData()}</ul>
        <button onClick={changeMenu}>
          {pizza ? "Pizza Menu" : "Sides Menu"}{" "}
        </button>
      </div>
    </div>
  );
}
