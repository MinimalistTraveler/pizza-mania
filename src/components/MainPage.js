import React, { Component } from "react";

// Components
import SlideShow from "./SlideShow";
import About from "./About";
import Menu from "./Menu";
import ContactForm from "./ContactForm";

// Styles (Effects The Entire Page.)
import styles from "../CSS/mainpage.styl";

class MainPage extends Component {
  render() {
    return (
      <div className={styles["main__page"]}>
        <SlideShow />
        <About />
        <Menu />
        <ContactForm />
      </div>
    );
  }
}

export default MainPage;
