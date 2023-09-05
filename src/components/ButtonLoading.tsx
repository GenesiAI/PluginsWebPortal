import { Button, CircularProgress } from "@mui/material";
import { ComponentProps } from "react";

interface InputProps {
  children: React.ReactNode;
  isLoading: boolean;
  disabled?: boolean;
  startIcon?: ComponentProps<typeof Button>["startIcon"];
  onClick?: ComponentProps<typeof Button>["onClick"];
  color?: Extract<
    ComponentProps<typeof Button>["color"],
    "success" | "error" | "primary" | "secondary"
  >;
  type?: ComponentProps<typeof Button>["type"];
}

const ButtonLoading = ({
  children,
  color = "success",
  type = "button",
  isLoading,
  disabled,
  onClick,
  startIcon
}: InputProps) => {
  return (
    <Button
      variant="contained"
      color={color}
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {isLoading ? (
        <CircularProgress
          size={24}
          sx={{ color: (theme) => theme.palette[color].contrastText }}
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonLoading;
