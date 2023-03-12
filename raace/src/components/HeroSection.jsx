import React, { Component } from "react";
import Background from "../assets/img/background.png";


class HeroSection extends Component {
  render() {
    return (
      <>
        <div className="hero-container">
          <img src={Background} alt="Background" />
          <h2>International Conference on</h2>
          <h1>
            {" "}
            Research Advancements in Sustainable Construction Materials <br />
            (RASCM-2023){" "}
          </h1>
        </div>
      </>
    );
  }
}

export default HeroSection;
