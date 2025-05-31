import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo.png" width={64} height={52} />
        <span>Velienne</span>
      </div>
      <div className="horizontal-separator"></div>
      <div className="nav-links">
        <ul>
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about-us">About us</a>
          </li>
          <li className="nav-item">
            <a href="#menu">Menu</a>
          </li>
          <li className="nav-item">
            <a href="#contact-us">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
