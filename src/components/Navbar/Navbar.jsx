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
          <li id="#home" className="nav-item">
            <a href="">Home</a>
          </li>
          <li id="#about-us" className="nav-item">
            <a href="">About us</a>
          </li>
          <li id="#menu" className="nav-item">
            <a href="">Menu</a>
          </li>
          <li id="#contact-us" className="nav-item">
            <a href="">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
