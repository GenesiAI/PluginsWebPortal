import { Container } from "@mui/material";
import Button from "components/Button";
import Typography from "components/Typography";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";

const SectionFive = () => {
  const { handleLogin } = useUserInfoCtx();
  return (
    <Container maxWidth="lg" className="my-16">
      <Typography variant="t1" className="mb-10 text-center text-primary">
        Discover the potential for your business
      </Typography>
      <Button onClick={handleLogin} color="tertiary" className="m-auto block">
        Create Your Plugin NOW!
      </Button>
    </Container>
  );
};

export default SectionFive;
