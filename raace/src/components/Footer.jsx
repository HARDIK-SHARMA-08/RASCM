import React from "react";
import contact from "../assets/img/contact.svg";
import { Link } from "react-router-dom";
import logo from "../assets/img/SKIT LOGO.png";

function Footer() {
  return (
    <>
      <div className="footer-container" id="footer">
        <div className="footer">
          <div className="about-footer">
              <img src={logo} alt="" srcset="" className="logo" />
            <div className="info">
              <div className="contactNo">
                <h1>Contact Us</h1>
                <img src={contact} alt="contact" className="contact-img" />
              </div>
              <p>
                The Convener, RASCM 2022 Department of Civil Engineering, <br />{" "}
                Swami Keshvanand Institute of Technology, Management and
                Gramothan. <br /> <i className="fa fa-envelope"></i>{" "}
                <a href="mailto:rascm@skit.ac.in" rel="nofollow">
                  {" "}
                  rascm@skit.ac.in
                </a>
              </p>
            </div>
          </div>
          {/* <div className="contact-number">
            <h2> Organizing Secretary </h2>{" "}
            <p>
              {" "}
              <br /> Mr. Nishant Sachdeva{" "}
              <a href="tel:+917737049665">+91 7737049665</a> <br /> 
              Dr. Ankit Sharma {" "}
              <a href="tel:+917737238044">+91 7737238044 </a> <br /> 
              Dr. Kishan Lal Jain {" "}
              <a href="tel:+918824431753">+91 8824431753 </a> <br /> 
              Dr. Abhishek Jain {" "}
              <a href="tel:+918058170872">+91 8058170872 </a>
            </p>
          </div> */}
          <div className="quick-link">
            <h2> quick links </h2>{" "}
            <p>
              {" "}
              <br />
              <Link to="/publication">Call for Paper</Link> <br />{" "}
              <Link to="/dates">Timeline</Link> <br />{" "}
              <Link to="/committee">Committees</Link> <br />{" "}
              <Link to="/registration">Registration</Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Department of Civil Engineering, SKIT Jaipur 2023</p>
        {/* <h3>
          Developed with &#x2764; by{" "}
          <a
            href="https://www.linkedin.com/in/hardik-sharma8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hardik Sharma
          </a>
        </h3> */}
      </div>
    </>
  );
}

export default Footer;
