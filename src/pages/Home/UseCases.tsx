import { Container } from "@mui/material";
import Button from "components/Button";
import Typography from "components/Typography";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import React from "react";

const UseCases: React.FC = () => {
  const { handleLogin } = useUserInfoCtx();
  return (
    <Container maxWidth="md" className="my-16">
      <Typography variant="t1" className="text-primary mb-10 text-center">
        Discover the potential for your business
      </Typography>
      <Button onClick={handleLogin} className="m-auto block">
        Create Your Plugin NOW!
      </Button>
    </Container>
  );
};

export default UseCases;
