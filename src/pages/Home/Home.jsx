import React from "react";
import HeroSlider from "../../components/homepage/HeroSlider";
import Services from "../../components/homepage/Services";
import AboutCompany from "../../components/homepage/AboutCompany";
import CounterUp from "../../components/homepage/CounterUp";
import CurrentUpdates from "../../components/homepage/CurrentUpdates";
import CustomerSection from "../../components/homepage/CustomerSection";
import AGCLInAction from "../../components/homepage/AGCLInAction";
import Certifications from "../../components/homepage/Certifications";
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Services />
      <AboutCompany />
      <CounterUp />
      <CurrentUpdates />
      <CustomerSection/>
      <AGCLInAction/>
      <Certifications/>
    </div>
  );
};

export default Home;
