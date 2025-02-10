import React from "react";
import HeroSlider from "../../components/homepage/HeroSlider";
import AboutCompany from "../../components/homepage/AboutCompany";
import CounterUp from "../../components/homepage/CounterUp";
import CurrentUpdates from "../../components/homepage/CurrentUpdates";
import CustomerSection from "../../components/homepage/CustomerSection";
import AGCLInAction from "../../components/homepage/AGCLInAction";
import Certifications from "../../components/homepage/Certifications";
import RemarkableLegacy from "../../components/homepage/RemarkableLegacy";
import Partners from "../../components/homepage/Partners";
import VerticalCategoryList from "../../components/VerticalCategoryList";
// import Shimmer from "../../components/Shimmer";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <VerticalCategoryList/>
      <AboutCompany />
      <CounterUp />
      <CurrentUpdates />
      <CustomerSection/>
      <AGCLInAction/>
      <Certifications/>
      <RemarkableLegacy/>
      <Partners/>
      {/* <Shimmer/> */}
    </div>
  );
};

export default Home;
