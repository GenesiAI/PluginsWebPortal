import Typography from "components/Typography";
import { motion } from "framer-motion";

type InputProps = {
  currentSection: number;
};
const SectionFourSteps = ({ currentSection }: InputProps) => {
  return (
    <div className="relative m-auto my-5 flex w-fit items-center">
      <Ball size={currentSection === 0 ? "big" : "small"}>1</Ball>
      <Connector />
      <Ball size={currentSection === 1 ? "big" : "small"}>2</Ball>
      <Connector />
      <Ball size={currentSection === 2 ? "big" : "small"}>3</Ball>
      <MovingBall currentSection={currentSection} />
    </div>
  );
};

type BallProps = {
  size: "big" | "small";
  children: string;
};

const Ball = ({ size, children }: BallProps) => (
  <motion.div
    className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white"
    initial={{ scale: 1 }}
    animate={{
      scale: size === "big" ? 1.75 : 1
    }}
    transition={{
      delay: size === "big" ? 1 : 0,
      duration: 0.5
    }}
  >
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: size === "big" ? 1 : 0
      }}
      transition={{
        delay: size === "big" ? 1 : 0,
        duration: 1
      }}
    >
      <Typography variant="t3" className="scale-75 text-primary">
        {children}
      </Typography>
    </motion.div>
  </motion.div>
);

const Connector = () => <div className="h-px w-24 bg-white"></div>;

type MovingBallProps = {
  currentSection: number;
};

const MovingBall = ({ currentSection }: MovingBallProps) => (
  <motion.div
    className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white"
    initial={{ left: "2%" }}
    animate={{
      left: currentSection === 0 ? "2%" : currentSection === 1 ? "45%" : "88%"
    }}
    transition={{
      duration: 0.5,
      delay: 0.5 // Wait for the Ball component to finish animating
    }}
  >
    <Typography variant="t3" className="text-primary">
      •
    </Typography>
  </motion.div>
);

export default SectionFourSteps;
