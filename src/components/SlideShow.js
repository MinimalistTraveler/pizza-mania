import React, { Component } from "react";
import styles from "../CSS/slideshow.styl";
import SlideShower from "react-slidez";
class SlideShow extends Component {
  constructor() {
    super();
    this.state = {
      i: 1,
      slideShowIntervalId: null
    };
  }
  componentDidMount() {
    let slideShowIntervalId = setInterval(this.slideShowInterval, 7000);
    this.setState({ slideShowIntervalId });
  }
  componentWillUnmount() {
    clearInterval(this.state.slideShowIntervalId);
  }

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

  render() {
    return (
      <div className={styles["slide"]}>
        <SlideShower
          slides={[
            "../../public/images/slide_1.jpg",
            "../../public/images/slide_2.jpg",
            "../../public/images/slide_3.jpg"
          ]}
          effect={"fade"}
          height={"100vh"}
          width={"100%"}
          slideInterval={7000}
          showArrows={false}
        />
        <div className={styles["slider__header"]}>{this.renderHeader()}</div>
      </div>
    );
  }
}
export default SlideShow;
