import React, { Component } from "react";
import Background from "../assets/img/background.png";

class HeroSection extends Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <img src={Background} alt="Background" />

          <h1>
            <h2>International Conference on</h2> Research Advancements in
            Sustainable Construction Materials <br />
            (RASCM-2023)
            <h3>
              {" "}
              21<sup>st</sup> December - 22<sup>nd</sup> December 2023{" "}
            </h3>
          </h1>
          <br />
        </div>
      </>
    );
  }
}

export default HeroSection;
