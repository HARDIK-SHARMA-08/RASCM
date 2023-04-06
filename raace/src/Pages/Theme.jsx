import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/NavBar";
import "../assets/css/theme.css";
import ThemeImg from "../assets/img/intro-bg.jpeg";

export const Theme = (props) => {
  return (
    <>
      <Navigation />
      <div className="Theme">
        <div className="Theme-container">
          <img src={ThemeImg} alt="Background" />
          <h1>Theme / Scope</h1>
        </div>
        <div className="Theme-content">
          <ul>
            <li>Sustainable construction materials </li>
            <li>Green materials and technology</li>
            <li>Construction automation</li>
            <li>Material characterization and testing</li>
            <li>Environmental and Economic assessment of materials</li>
            <li>Waste minimization & management</li>
            <li>Computational techniques, IoT & AI in Civil Engineering</li>
            <li>Smart materials</li>
            <li>Highway construction materials & techniques</li>
            <li>Sustainable infrastructure</li>
            <li>Water & waste water management</li>
            <li>Solid waste management</li>
            <li>Innovative testing methods</li>
            <li>
              Ground improvement techniques GIS and Remote Sensing applications
            </li>
            <li>Renewable energy applications</li>
            <li>Soil structure interaction</li>
            <li>Innovative trends in civil engineering and material science</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
