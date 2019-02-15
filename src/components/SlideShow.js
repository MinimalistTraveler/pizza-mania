import React, { Component } from "react";
import styles from "../CSS/slideshow.styl";

class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      i: 1
    };
  }
  slideShowInterval = () => {
    const { i } = this.state;
    if (i < 3) {
      this.setState({
        i: i + 1
      });
    } else {
      this.setState({
        i: 1
      });
    }
    
  };
  slideShowRender = () => {
    const { i } = this.state;
    switch (i) {
      case 1: {
        return (
          <div className={styles["slider"]}>
            <img
              className={styles["slider__img"]}
              src="../../public/images/slide_1.jpg"
              alt="Special Offer"
            />
            <div className={styles["slider__header"]}>
              <h1>Limited Time Only</h1>
              <h2>Two Large Toppings For Ten Dollars</h2>
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <div className={styles["slider"]}>
            <img
              className={styles["slider__img"]}
              src="../../public/images/slide_2.jpg"
              alt="We Now Offer Catering"
            />
            <div className={styles["slider__header"]}>
              <h1>We Now Offer Catering</h1>
              <h2>See Resturant For More Details</h2>
            </div>
          </div>
        );
      }
      case 3: {
        return (
          <div className={styles["slider"]}>
            <img
              className={styles["slider__img"]}
              src="../../public/images/slide_3.jpg"
              alt="Job Opportunies are avaliable."
              id="slide"
            />
            <div className={styles["slider__header"]}>
              <h1>Job Opportunities Are Now Avaliable</h1>
              <h2>Only at participating resturants</h2>
            </div>
          </div>
        );
      }
    }
  };
  render() {
    return <div>{this.slideShowRender()}</div>;
  }
}
export default SlideShow;
