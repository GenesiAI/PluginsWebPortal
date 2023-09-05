import React from "react";
import "slick-carousel/slick/slick.css";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import UseCases from "./UseCases";
import WhatSection from "./WhatSection";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <WhatSection />
      <FeatureSection />
      <UseCases />
    </>
  );
};

export default Home;
