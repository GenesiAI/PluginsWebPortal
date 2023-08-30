import { Button as ButtonCore } from "@mui/material";
import { ComponentProps } from "react";

interface InputProps {
  children?: React.ReactNode;
  disabled?: boolean;
  startIcon?: ComponentProps<typeof ButtonCore>["startIcon"];
  endIcon?: ComponentProps<typeof ButtonCore>["endIcon"];
  onClick?: ComponentProps<typeof ButtonCore>["onClick"];
  variant?: "lightBg" | "darkBg";
  color?: "error" | "primary" | "secondary" | "tertiary";
  type?: ComponentProps<typeof ButtonCore>["type"];
  className?: string;
}

const Button = ({
  children = "change me",
  color = "primary",
  type = "button",
  variant = "lightBg",
  disabled,
  onClick,
  startIcon,
  endIcon,
  className
}: InputProps) => {
  return (
    <ButtonCore
      variant={variant}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
    >
      {children}
    </ButtonCore>
  );
};

export default Button;
