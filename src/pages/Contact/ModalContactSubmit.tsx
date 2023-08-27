import { Button } from "@mui/material";
import useHandlerAuth from "components/Header/useHandlerAuth";
import Modal from "components/Modal";
import { memo } from "react";
import { useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ModalContactSubmit = () => {
  const navigate = useNavigate();
  const { handleLogin } = useHandlerAuth();
  const goToHome = () => {
    navigate("/");
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
