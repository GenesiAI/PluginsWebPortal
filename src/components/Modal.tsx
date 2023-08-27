import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Theme,
  useMediaQuery
} from "@mui/material";
import React from "react";

interface InputProps {
  titleText: React.ReactNode;
  contentText: React.ReactNode;
  actions: React.ReactNode;
  open: boolean;
  handleClose?: () => void;
}

const Modal = ({
  open,
  handleClose,
  actions,
  titleText,
  contentText
}: InputProps) => {
  const fullScreen = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      <DialogTitle>{titleText}</DialogTitle>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

export default Modal;
