import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import HeroSection from "../components/HeroSection";
import FAQsection from "../components/FAQsection";
import WhatSection from "../components/WhatSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import UseCases from "../components/UseCases";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const GoToLogin = async () => {
    navigate("/login");
  };

  return (
    <>
      <HeroSection />
      <WhatSection />
      <FeatureSection />
      <UseCases />
      <FAQsection />
      <Footer />
    </>
  );
};

export default Home;
