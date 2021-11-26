import React from "react";
import Footer from "../Footer/Footer";
import Appbar from "../Header/AppBar/Appbar";
import Banner from "../Header/Banner/Banner";
import Contact from "../Main/Contact/Contact";
import PortFolio from "../Main/PortFolio/PortFolio";
import Story from "../Main/Story/Story";
import Testimonials from "../Main/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Appbar></Appbar>
      <Banner />
      <PortFolio />
      <Story />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
