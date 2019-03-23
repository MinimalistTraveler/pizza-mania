import React, { Component } from "react";
import styles from "../CSS/slideshow.styl";
import SlideShower from "react-slidez";
// SlideShow Class Component
class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      i: 1,
      slideShowIntervalId: null
    };
  }
  // As soon as the slideshow is mounted create the interval state.
  componentDidMount() {
    // This timer is for the headers ONLY not the images.
    let slideShowIntervalId = setInterval(this.slideShowInterval, 10000);
    this.setState({ slideShowIntervalId });
  }
  // IF the component unmounts remove the interval function
  // This prevents unnecessary lag.
  componentWillUnmount() {
    clearInterval(this.state.slideShowIntervalId);
  }
  // This function sets the interval for the header timer ONlY.
  slideShowInterval = () => {
    const { i } = this.state;
    if (i >= 3) {
      return this.setState({
        i: 1
      });
    } else {
      return this.setState({
        i: i + 1
      });
    }
  };

  renderHeader = () => {
    const { i } = this.state;
    switch (i) {
      case 1: {
        return (
          <React.Fragment>
            <h1>Large Topping Pizzas</h1>
            <h2>Starting 11 Dollars!</h2>
          </React.Fragment>
        );
      }
      case 2: {
        return (
          <React.Fragment>
            <h1>Enjoyed Your Pizza?</h1>
            <h2>Contact Us And Tell Us Your Experience With Us!</h2>
          </React.Fragment>
        );
      }
      case 3: {
        return (
          <React.Fragment>
            <h1>Job Opportunities Are Avaliable</h1>
            <h2>Only For A Limited Time!</h2>
          </React.Fragment>
        );
      }
      default: {
        return (
          <React.Fragment>
            <h1>Large Topping Pizzas</h1>
            <h2>Starting At 11 Dollars!</h2>
          </React.Fragment>
        );
      }
    }
  };
  /* The SlideShower Component renders the image slideshow
 Note: The slideInterval option creates the interval timer for the IMAGES
 Do not confuse that interval timer with the header timer. */
  render() {
    return (
      <div className={styles["slide"]}>
        <SlideShower
          slides={[
            "../public/images/slide_1.jpg",
            "../public/images/slide_2.jpg",
            "../public/images/slide_3.jpg"
          ]}
          effect={"fade"}
          height={"100vh"}
          width={"100%"}
          slideInterval={10000}
          showArrows={false}
        />
        <div className={styles["slider__header"]}>{this.renderHeader()}</div>
      </div>
    );
  }
}
export default SlideShow;
