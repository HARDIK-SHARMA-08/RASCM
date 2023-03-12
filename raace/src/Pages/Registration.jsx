import React from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import "../assets/css/registration.css";

function Registration() {
  return (
    <>
      <Navigation />
      <div className="registration">
        <h1>Registration Fees</h1>
        <div className="table">
          <table>
            <tr>
              <th>Category</th>
              <th>Regular Registration Fee</th>
              <th>Early Bird Registration Fee</th>
            </tr>
            <tr>
              <td>Students (National)</td>
              <td>Blank</td>
              <td>Blank</td>
            </tr>
            <tr>
              <td>Faculty (National)</td>
              <td>Blank</td>
              <td>Blank</td>
            </tr>
            <tr>
              <td>Industry Persons</td>
              <td>Blank</td>
              <td>Blank</td>
            </tr>
            <tr>
              <td>Students (International)</td>
              <td>Blank</td>
              <td>Blank</td>
            </tr>
            <tr>
              <td>Faculty (International)</td>
              <td>Blank</td>
              <td>Blank</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Registration;
