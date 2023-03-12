import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/NavBar";
import "../assets/css/committee.css";

export const Committee = (props) => {
  return (
    <>
      <Navigation />
      <div className="committee"></div>
      <Footer />
    </>
  );
};
