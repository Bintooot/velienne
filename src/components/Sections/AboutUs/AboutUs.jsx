import React from "react";
import "./AboutUs.css";
import zigzagline from "../../../assets/zigzag-line.svg";

const AboutUs = (props) => {
  return (
    <section className="about-us-wrapper" id={props.id}>
      <h2>
        About us: <span>Velienne</span>
      </h2>
      <p className="about-us-content">
        At <i>Velienne</i>, dining is elevated to an art form. Born from a
        passion for exquisite cuisine, timeless design, and warm hospitality,
        Velienne is more than just a restaurant — it's a curated experience
        where every detail is crafted to delight.
        <br />
        <br />
        Our philosophy is simple: exceptional food, genuine service, and an
        atmosphere that feels both intimate and inspiring. Drawing from European
        culinary traditions and global influences, our chefs create seasonally
        inspired menus that celebrate both flavor and finesse. Every plate is a
        canvas, every ingredient a note in a harmonious composition of taste.
        <br />
        <br />
        Step into Velienne and you’ll find a space where soft light dances on
        marble surfaces, where music hums gently in the background, and where
        time slows down — inviting you to savor each moment.
        <br />
        <br />
        Whether you're joining us for a romantic evening, a special celebration,
        or a quiet escape into flavor, we welcome you to Velienne — where every
        meal becomes a memory.
      </p>
      <div className="img-wrapper">
        <img src={zigzagline} alt="zigzagline" id="zigzagline" />
        <div className="table"></div>
      </div>
    </section>
  );
};

export default AboutUs;
