import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [active, isActive] = useState("home");

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
            <a
              href="#home"
              onClick={() => isActive("home")}
              className={active === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about-us"
              onClick={() => isActive("about-us")}
              className={active === "about-us" ? "active" : ""}
            >
              About us
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#menu"
              onClick={() => isActive("menu")}
              className={active === "menu" ? "active" : ""}
            >
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact-us"
              onClick={() => isActive("contact-us")}
              className={active === "contact-us" ? "active" : ""}
            >
              Contact us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
