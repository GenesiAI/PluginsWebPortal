import Typography from "components/Typography";

const SectionFourSlideThree = () => {
  return (
    <>
      <div className="md:w-1/2">
        <Typography variant="t3" className="text-inherit">
          Publish you plugin and let the magic happen{" "}
        </Typography>
        <Typography variant="t5" className="block text-inherit">
          As soon as your plugin is approved it will be online
        </Typography>
        <Typography variant="t5" className="block text-inherit">
          You will be able to edit details whenever you want
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
        Imageaaaaaaaaaaaaaaaaa
      </div>
    </>
  );
};

export default SectionFourSlideThree;
