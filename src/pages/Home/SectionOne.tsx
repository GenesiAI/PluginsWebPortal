import Button from "components/Button";
import Typography from "components/Typography";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import Video from "./Video";

const SectionOne = () => {
  const { handleLogin } = useUserInfoCtx();

  return (
    <div className="mt-20">
      <Typography variant="t1" className="text-center">
        <span>Build ChatGPT plugins</span>
        <br></br>
        in
        <span className="text-primary">&nbsp;2 minutes.</span>
      </Typography>
      <Button
        color="tertiary"
        onClick={handleLogin}
        className="mx-auto mt-8 block"
      >
        CREATE YOUR PLUGIN
      </Button>
      <Typography variant="t6" className="block text-center">
        *No credit card required
      </Typography>
      <Video />
    </div>
  );
};

export default SectionOne;
