import React, { useEffect, useState } from "react";
import Hero from "./components/Sections/Hero/Hero";
import AboutUs from "./components/Sections/AboutUs/AboutUs";
import Menu from "./components/Sections/Menu/Menu";
import Footer from "./components/Sections/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <Hero id="home" />
          <AboutUs id="about-us" />
          <Menu id="menu" />
          <Footer id="contact-us" />
        </>
      )}
    </>
  );
};

export default App;
