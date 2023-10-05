import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import classNames from "classnames";
import Typography from "components/Typography";
import { Variants, motion } from "framer-motion";

const Check = () => (
  <CheckCircleOutlineIcon className="m-2 me-4 text-primary" />
);

// Define variants as functions that take 'index' as a parameter
const ViewportOptions = { once: true, margin: "30px" };
const variants: Variants = {
  initialImg: {
    opacity: 0,
    y: -20
  },
  animateImg: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }),
  initialTitle: {
    opacity: 0,
    y: -20
  },
  animateTitle: () => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }),
  initialText: {
    opacity: 0,
    y: 20
  },
  animateText: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.3, duration: 0.6 } // use index here
  })
};

type InputProps = {
  title: string;
  imageClassName: string;
  skillsClassName: string;
  dividerClassName: string;
  image: React.ReactNode;
  skills: string[];
};

const SectionThreeTemplate = ({
  title,
  image,
  skills,
  imageClassName,
  skillsClassName,
  dividerClassName
}: InputProps) => (
  <>
    <motion.div
      variants={variants}
      initial="initialImg"
      whileInView="animateImg"
      viewport={ViewportOptions}
      style={{
        width: "27rem",
        height: "24.625rem"
      }}
      className={imageClassName}
    >
      {image}
    </motion.div>
    <div
      className={classNames(
        "col-start-2 hidden h-1/2 w-px bg-primary md:inline",
        dividerClassName
      )}
    ></div>
    <div className={skillsClassName}>
      <motion.div
        variants={variants}
        initial="initialTitle"
        whileInView="animateTitle"
        viewport={ViewportOptions}
      >
        <Typography variant="t3" className="mb-3">
          {title}
        </Typography>
      </motion.div>

      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="my-2 flex items-center"
          variants={variants}
          initial="initialText"
          whileInView="animateText"
          custom={index}
          viewport={ViewportOptions}
        >
          <Check />
          <Typography variant="t4" className="block">
            {skill}
          </Typography>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionThreeTemplate;
