import Button from "components/Button";
import Modal from "components/Modal";
import { contacts } from "const/urls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useModalMaxPlugins = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const openModalMaxPlugin = () => setIsOpen(true);
  const modalMaxPlugin = (
    <Modal
      centerActions
      actions={
        <Button
          onClick={() => navigate(`/${contacts}`)}
          color="primary"
          variant="darkBg"
        >
          CONTACT
        </Button>
      }
      open={isOpen}
      handleClose={() => setIsOpen(false)}
      titleText="You reached the maximum number of plugins!"
      contentText="But don't worry! Contact us to require additional quota"
    />
  );
  return {
    modalMaxPlugin,
    openModalMaxPlugin
  };
};

export default useModalMaxPlugins;
