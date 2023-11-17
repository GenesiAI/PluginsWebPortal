import { Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import UseCases from "./UseCases";
import WhatSection from "./WhatSection";

const Home: React.FC = () => {
  return (
    <div>
      <Typography
        variant="h2"
        align="center"
        sx={{
          fontSize: { xs: "1.3rem", sm: "1.3rem" },
          margin: { xs: "1rem 0", sm: "2rem 0" },
          fontFamily: "Tahoma",
          fontWeight: "bold",
          color: "red"
        }}
      >
        Genesi has been closed on november 2023, use{" "}
        <a
          href="https://openai.com/blog/introducing-gpts"
          target="_blank"
          rel="noopener noreferrer"
          title="OpenAI GPTs"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          OpenAI GPTs
        </a>
      </Typography>
      <HeroSection />
      <WhatSection />
      <FeatureSection />
      <UseCases />
    </div>
  );
};

export default Home;
