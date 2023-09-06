import Button from "components/Button";
import Modal from "components/Modal";
import React from "react";

interface AlertDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm: () => void;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  open,
  setOpen,
  onConfirm
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      titleText="Delete Plugin"
      contentText="Are you sure you want to delete this plugin? This action cannot be undone."
      handleClose={handleClose}
      actions={
        <>
          <Button onClick={handleClose} color="primary" variant="darkBg">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="error">
            Delete
          </Button>
        </>
      }
    />
  );
};

export default AlertDialog;
