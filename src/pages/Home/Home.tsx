import React from "react";
import "slick-carousel/slick/slick.css";
import FAQsection from "./FAQsection";
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
      <FAQsection />
    </>
  );
};

export default Home;
