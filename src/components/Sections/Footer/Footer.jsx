import React from "react";
import "./Footer.css";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <section className="logo-wrapper">
        <div>
          <img src={logo} alt="logo.png" />
        </div>
        <div>
          <h2>Veleinne</h2>
          <p>An Elegant Symphony of Taste, Art, and Atmosphere.</p>
        </div>
      </section>
      <section className="contact-details">
        <div>
          <h3>📍 Location:</h3>
          <p>123 Rue Lumière, Belleville District, New York, NY 10001</p>
        </div>
        <div>
          <h3>📞 Phone:</h3>
          <p>(212) 555-0194</p>
        </div>
        <div>
          <h3>📧 Email:</h3>
          <p>reservations@velienne.com</p>
        </div>
      </section>
      <section className="time-schedule">
        <h3>🕰️ Opening Hours:</h3>
        <p>
          Monday – Thursday: 5:00 PM – 10:00 PM <br /> Friday – Saturday: 5:00
          PM – 11:00 PM <br /> Sunday: Closed
        </p>
      </section>
    </footer>
  );
};

export default Footer;
