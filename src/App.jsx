import React from "react";
import Hero from "./components/Sections/Hero/Hero";
import AboutUs from "./components/Sections/Aboutus/AboutUs";
import Menu from "./components/Sections/Menu/Menu";
import Footer from "./components/Sections/Footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
