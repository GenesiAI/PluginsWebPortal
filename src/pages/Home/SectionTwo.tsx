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
        {/* <Box
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          padding: "1rem",
          margin: "auto",
          maxWidth: { xs: "90%", sm: "90%", md: "70%", lg: "70%" },
          justifyContent: "center",
          textAlign: "center",
          border: "3px solid #ccc",
          borderColor: "#6360FF",
          borderRadius: "6px"
        }}
      >
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              borderRight: { xs: "none", md: "2px solid #6360FF" },
              padding: { xs: "0.5rem", md: "1rem" },
              borderBottom: { xs: "2px solid #6360FF", md: "none" }
            }}
          >
            <Typography variant="t4">GenesiAI Is Easy</Typography>
            <Typography variant="t3">
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              Intuitive interface <br />{" "}
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              No code <br />{" "}
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              No technical expertise required
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              borderRight: { md: "2px solid #6360FF " },
              padding: { xs: "0.5rem", md: "1rem" },
              borderBottom: { xs: "2px solid #6360FF", md: "none" }
            }}
          >
            <Typography variant="t4">Make Work Life Simple</Typography>
            <Typography variant="t3">
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              All your data in one ecosystem
              <br />
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              One question, all the answers
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              padding: { xs: "0.5rem", md: "1rem" }
            }}
          >
            <Typography variant="t4">GenesiAI Is Fast</Typography>
            <Typography variant="t3">
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              Easy integration between your data and the plugin <br />
              <CheckCircleOutlineIcon
                sx={{ color: "#6360FF", margin: "0.5rem" }}
              />
              Just 2 minutes to create your plugin
            </Typography>
          </Grid>
        </Grid>
      </Box> */}
      </Container>
    </div>
  );
};

export default SectionTwo;
