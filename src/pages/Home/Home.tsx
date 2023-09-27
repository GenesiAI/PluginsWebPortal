import "slick-carousel/slick/slick.css";
import FeatureSection from "./FeatureSection";
import SectionFive from "./SectionFive";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

const Home = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <FeatureSection />
      <SectionFive />
    </div>
  );
};

export default Home;
