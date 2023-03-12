import React from "react";
import contact from "../assets/img/contact.svg";
import Navigation from "../components/NavBar";
import "../assets/css/contact.css";

function Contact() {
  return (
    <>
      <Navigation />
      <div className="contact-container" id="contactUs">
        <div className="contact">
          <div className="about-contact">
            <div className="Contact">
              <h1>Contact Us</h1>
              <img src={contact} alt="contact" className="contact-img" />
            </div>
            <p>
              The Convener, RASCM 2022 <br /> Department of Civil Engineering,{" "}
              <br /> Swami Keshvanand Institute of Technology, Management and
              Gramothan. <br /> <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:rascm@skit.ac.in" rel="nofollow">
                {" "}
                rascm@skit.ac.in
              </a>
            </p>
          </div>
          <div className="Contact-number">
            <h1> Organizing Secretary </h1>{" "}
            <p>
              {" "}
              <ul>
                <div className="number">
                  <li>
                    {" "}
                    <p> Mr. Nishant Sachdeva </p>
                    <i class="fa fa-phone"></i>{" "}
                    <a href="tel:+917737049665"> +91 7737049665</a>
                  </li>{" "}
                  <li>
                    {" "}
                    <p> Dr. Ankit Sharma </p>
                    <i class="fa fa-phone"></i>{" "}
                    <a href="tel:+917737238044"> +91 7737238044 </a>
                  </li>{" "}
                  <li>
                    {" "}
                    <p> Dr. Kishan Lal Jain </p>
                    <i class="fa fa-phone"></i>{" "}
                    <a href="tel:+918824431753"> +91 8824431753 </a>
                  </li>{" "}
                  <li>
                    {" "}
                    <p>Dr. Abhishek Jain</p>
                    <i class="fa fa-phone"></i>{" "}
                    <a href="tel:+918058170872"> +91 8058170872 </a>
                  </li>
                </div>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; Department of Civil Engineering, SKIT Jaipur 2023</p>
      </div>
    </>
  );
}

export default Contact;
