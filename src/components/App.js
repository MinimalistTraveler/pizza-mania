import React, { Component } from "react";
import Navbar from "./Navbar";
import MainPage from "./MainPage";
import Footer from "./Footer";
const App = class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainPage />
        <Footer />
      </div>
    );
  }
};
export default App;
