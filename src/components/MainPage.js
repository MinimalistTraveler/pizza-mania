import React, { Component } from "react";
// Components
import ContactForm from "./ContactForm";
import SlideShow from "./SlideShow";
import About from "./About";
import styles from "../CSS/mainpage.styl";

class MainPage extends Component {
  render() {
    return (
      <div className={styles["main__page"]}>
        <SlideShow />
        <About />
        <ContactForm />
      </div>
    );
  }
}

export default MainPage;
