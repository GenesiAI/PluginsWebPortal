import Typography from "components/Typography";

const SectionFourSlideOne = () => {
  return (
    <>
      <div className="md:w-1/2">
        <Typography variant="t3" className="text-inherit">
          Enter your data
        </Typography>
        <Typography variant="t5" className="block text-inherit">
          Add everything you want to share with your plugin users
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
    </>
  );
};

export default SectionFourSlideOne;
