import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
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
  centerActions?: boolean;
  handleClose?: () => void;
}

const Modal = ({
  open,
  handleClose,
  actions,
  titleText,
  contentText,
  centerActions
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
      <div className="bg-primary px-4 py-6">{_titleText}</div>
      <DialogContent className="bg-primary pt-2 pb-10">
        <DialogContentText>{_contentText}</DialogContentText>
      </DialogContent>
      <DialogActions
        className={`bg-primary pb-5${centerActions ? " justify-center" : ""}`}
      >
        {actions}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
