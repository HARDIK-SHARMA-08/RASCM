import React from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import "../assets/css/registration.css";

function Dates() {
  return (
    <>
      <Navigation />
      <div className="registration">
        <h1>Important Dates</h1>
        <div className="table">
          <table>
            <tr>
              <th>Call for Abstract</th>
              <td>
                1<sup>st</sup> June 2023 - 15<sup>th</sup> September 2023
              </td>
            </tr>
            <tr>
              <th>Notification of Acceptance for Oral Presentation</th>
              <td>15<sup>th</sup> October 2023</td>
            </tr>
            <tr>
              <th>Registration</th>
              <td>
                {" "}
                <li>
                  {" "}
                  <b> Early Bird: </b>16<sup>th</sup> October 2023 - 31<sup>st</sup> October 2023{" "}
                </li>
                <br />
                <li>
                  {" "}
                  <b> Late Bird:</b> 1<sup>st</sup> November 2023 - 10<sup>th</sup> November 2023{" "}
                </li>
              </td>
            </tr>
            <tr>
              <th>Submission of Full length Paper</th>
              <td>
                30<sup>th</sup> November 2023
              </td>
            </tr>
            <tr>
              <th>Conference Dates</th>
              <td>
                21<sup>st</sup> December - 22<sup>nd</sup> December 2023
              </td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dates;
