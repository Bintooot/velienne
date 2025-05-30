import React from "react";
import Navbar from "../../Navbar/Navbar";
import OutlinedButton from "../../Button/OutlinedButton/OutlinedButton";
import FilledButton from "../../Button/FilledButton/FilledButton";
import { FiCalendar, FiBookOpen } from "react-icons/fi";

import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-wrapper">
      <div className="hero-content">
        <Navbar />
        <div className="hero-info">
          <h1>Where Every Plate Tells a Story</h1>
          <div className="separator"></div>
          <h2>
            Experience an exquisite fusion of culinary artistry, refined
            ambiance, and impeccable service — where each moment is thoughtfully
            curated and every dish is a celebration of flavor, culture, and
            creativity.
          </h2>
          <div className="button-wrapper">
            <OutlinedButton
              title="Reserve Now"
              icon={<FiCalendar fontSize={25} />}
            />
            <FilledButton
              title="Explore Our Story"
              icon={<FiBookOpen fontSize={25} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
