import React, { Component } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarScrolled">
        <div className="Navbar" id="NavigationBar">
          <img src={logo} alt="" className="Logo" />
          <div className="HamBurgerIcon" onClick={this.handleClick}>
            <Hamburger rounded size={25}></Hamburger>
          </div>
          <div className={this.state.clicked ? "NavMenu bg" : "NavMenu"}> </div>
          <ul className={this.state.clicked ? "NavMenu active" : "NavMenu"}>
            
            <li>
              <Link to="/" className="NavItem">
                HOME
              </Link>
            </li>

            <li>
              <Link to="/theme" className="NavItem">
                THEME
              </Link>
            </li>

            <li>
              <Link to="/committee" className="NavItem">
                COMMITTEES
              </Link>
            </li>

            <li>
              <Link to="/author" className="NavItem">
                INTRODUCTION FOR AUTHORS
              </Link>
            </li>

            <li>
              <Link to="/publication" className="NavItem">
                PUBLICATION
              </Link>
            </li>

            <li>
              <Link to="/dates" className="NavItem">
                DATES
              </Link>
            </li>

            <li>
              <Link to="/registration" className="NavItem">
                REGISTRATION
              </Link>
            </li>

            <li>
              <Link to="/contact" className="NavItem">
                CONTACT US
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
