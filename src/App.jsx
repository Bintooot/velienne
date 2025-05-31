import React from "react";
import Hero from "./components/Sections/Hero/Hero";
import AboutUs from "./components/Sections/Aboutus/AboutUs";
import Menu from "./components/Sections/Menu/Menu";
import Footer from "./components/Sections/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <AboutUs id="about-us" />
      <Menu id="menu" />
      <Footer id="contact-us" />
    </div>
  );
};

export default App;
