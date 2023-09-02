import { Button } from "@mui/material";
import Modal from "components/Modal";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { home } from "const/urls";
import { memo } from "react";
import { useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ModalContactSubmit = () => {
  const navigate = useNavigate();
  const { handleLogin } = useUserInfoCtx();
  const goToHome = () => {
    navigate(home);
  };
  const { isSubmitSuccessful } = useFormState();

  return (
    <Modal
      open={isSubmitSuccessful}
      titleText="Success!"
      contentText="Your submission was successful! We appreciate your interest and will be in touch soon."
      // handleClose={goToHome}
      actions={
        <>
          <Button onClick={handleLogin}>Go to your plugins</Button>
          <Button onClick={goToHome}>See our homepage!</Button>
        </>
      }
    />
  );
};

export default memo(ModalContactSubmit);
