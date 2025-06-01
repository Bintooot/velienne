import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [active, isActive] = useState("home");
  const [show, isShow] = useState(false);

  return (
    <nav className="navbar-wrapper">
      <div className="logo-wrapper">
        <img src={logo} alt="logo.png" width={64} height={52} />
        <span>Velienne</span>
      </div>
      <div className="horizontal-separator"></div>
      <div className="mobile-menu-icon" onClick={() => isShow(!show)}>
        <FaBars fontSize={25} />
      </div>
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
      <div className={`sidebar ${show ? "show" : "hide"}`}>
        <div className="sidebar-header-container">
          <div className="logo-wrapper">
            <img src={logo} alt="logo.png" width={64} height={52} />
            <span>Velienne</span>
          </div>
          <div className="horizontal-separator"></div>
          <div className="mobile-menu-icon" onClick={() => isShow(!show)}>
            <FaBars fontSize={25} />
          </div>
        </div>

        <ul>
          <li className="sidebar-nav-item">
            <a
              href="#home"
              onClick={() => isActive("home")}
              className={active === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a
              href="#about-us"
              onClick={() => isActive("about-us")}
              className={active === "about-us" ? "active" : ""}
            >
              About us
            </a>
          </li>
          <li className="sidebar-nav-item">
            <a
              href="#menu"
              onClick={() => isActive("menu")}
              className={active === "menu" ? "active" : ""}
            >
              Menu
            </a>
          </li>
          <li className="sidebar-nav-item">
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
