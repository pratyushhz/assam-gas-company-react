import React from "react";
import HeroSlider from "../../components/homepage/HeroSlider";
import Services from "../../components/homepage/Services";
import AboutCompany from "../../components/homepage/AboutCompany";
import CounterUp from "../../components/homepage/CounterUp";
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Services/>
      <AboutCompany />
      <CounterUp/>
    </div>
  );
};

export default Home;
