import React from "react";
import NavigationBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import "./App.css";

const Main = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Main;
