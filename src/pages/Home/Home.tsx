import "slick-carousel/slick/slick.css";
import FeatureSection from "./FeatureSection";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import UseCases from "./UseCases";

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <FeatureSection />
      <UseCases />
    </div>
  );
};

export default Home;
