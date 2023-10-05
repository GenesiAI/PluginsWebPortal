import { Container } from "@mui/material";
import Typography from "components/Typography";

const SectionTwo = () => {
  return (
    <div className="my-12 bg-primary">
      <Container
        maxWidth="lg"
        className="flex flex-col items-center gap-6 p-12 text-white md:flex-row"
      >
        <div className="md:w-1/2">
          <Typography variant="t2" className="text-inherit md:mb-4">
            Customize the answers of ChatGPT with your data.
          </Typography>
          <Typography variant="t5" className="block text-inherit md:p-6">
            GenesiAI is a tool that allows you to create your ChatGPT custom
            plugin in a couple of clicks, without any coding experience or
            technical expertise.
          </Typography>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "solid 1px red"
          }}
          className="md:w-1/2"
        >
          Image
        </div>
      </Container>
    </div>
  );
};

export default SectionTwo;
