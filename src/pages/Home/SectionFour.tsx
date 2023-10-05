import { Container } from "@mui/material";
import Typography from "components/Typography";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionFourSlideOne from "./SectionFourSlideOne";
import SectionFourSlideThree from "./SectionFourSlideThree";
import SectionFourSlideTwo from "./SectionFourSlideTwo";
import SectionFourSteps from "./SectionFourSteps";

const sections = [
  <SectionFourSlideOne />,
  <SectionFourSlideTwo />,
  <SectionFourSlideThree />
];
const sectionVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transitionDuration: "1s" },
  exit: { opacity: 0, transitionDuration: "1s" }
};
const SectionFour = () => {
  const [currentSection, setCurrentSection] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % 3);
    }, 5000); // Change section every 5 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="my-12 bg-primary py-10 text-white">
      <Container maxWidth="lg">
        <Typography variant="t1" className="block text-center text-inherit">
          How Genesi Works
        </Typography>
        <SectionFourSteps currentSection={currentSection} />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex h-96 flex-col items-center gap-6 p-12 md:flex-row"
          >
            {sections[currentSection]}
          </motion.div>
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default SectionFour;
