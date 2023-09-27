import { Container } from "@mui/material";
import { memo } from "react";
import SectionThreeTemplate from "./SectionThreeTemplate";

const SectionThree = () => {
  return (
    <Container
      maxWidth="lg"
      className="my-10 grid grid-cols-1 grid-rows-6 place-content-center place-items-center gap-6 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:grid-rows-3"
    >
      <SectionThreeTemplate
        title="For everyone"
        imageClassName="col-start-1 row-start-2 md:row-start-1 bg-primary"
        skillsClassName="col-start-1 row-start-1 md:col-start-3 md:row-start-1"
        dividerClassName="row-start-1"
        image={"IMAGE"}
        skills={[
          "Intuitive interface",
          "No code",
          "No technical expertise required"
        ]}
      />
      <SectionThreeTemplate
        title="Integrated with ChatGPT"
        imageClassName="col-start-1 row-start-4 md:col-start-3 md:row-start-2 bg-primary"
        skillsClassName="col-start-1 row-start-3 md:row-start-2"
        dividerClassName="row-start-2"
        image={"IMAGE2"}
        skills={["and soon Bard, Bing and more"]}
      />
      <SectionThreeTemplate
        title="Fastest on the market"
        imageClassName="col-start-1 row-start-6 md:row-start-3 bg-primary"
        skillsClassName="col-start-1 row-start-5 md:col-start-3 md:row-start-3"
        dividerClassName="row-start-3"
        image={"IMAGE32"}
        skills={[
          "Create plugins in minutes not hours or days",
          "From idea to production in a flash"
        ]}
      />
    </Container>
  );
};

export default memo(SectionThree);
