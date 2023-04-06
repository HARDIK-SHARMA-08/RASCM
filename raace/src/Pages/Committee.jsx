import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/NavBar";
import "../assets/css/committee.css";
import CommitteeSection from "../components/CommitteeSection";
import JsonData from "../assets/data.json";
import Patron from "../components/Patron";
import OrganizingCommittee from "../components/OrganizingCommittee";

export const Committee = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <div className="committee">
        <h1>Committee</h1>
        <h2>Chief Patron</h2>
        <Patron data={landingPageData.ChiefPatron} />
        <h2>Conference Chair</h2>
        <CommitteeSection data={landingPageData.ConfereneChair} />
        <h2>Convenor</h2>
        <Patron data={landingPageData.Convenor} />
        <h2>International Advisory</h2>
        <CommitteeSection data={landingPageData.InternationalAdvisory} />
        <h2>National Advisory</h2>
        <CommitteeSection data={landingPageData.NationalAdvisory} />
        <h2>Organizing Committee</h2>
        <OrganizingCommittee data={landingPageData.Organize} />
        <h2>Students Coordinators</h2>
        <OrganizingCommittee data={landingPageData.Student} />
      </div>
      <Footer />
    </>
  );
};
