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
import Typography from "./Typography";

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

  const _titleText =
    typeof titleText === "string" ? (
      <Typography variant="t3" className="text-white font-bold">
        {titleText}
      </Typography>
    ) : (
      titleText
    );
  const _contentText =
    typeof titleText === "string" ? (
      <Typography className="text-white font-semibold">
        {contentText}
      </Typography>
    ) : (
      contentText
    );

  return (
    <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
      <DialogTitle className="bg-primary">{_titleText}</DialogTitle>
      <DialogContent className="bg-primary pt-2 pb-10">
        <DialogContentText>{_contentText}</DialogContentText>
      </DialogContent>
      <DialogActions className="bg-primary">{actions}</DialogActions>
    </Dialog>
  );
};

export default Modal;
