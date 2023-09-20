import { CircularProgress } from "@mui/material";
import classNames from "classnames";
import { ComponentProps } from "react";
import Button from "./Button";
import Typography from "./Typography";

interface InputProps {
  children: React.ReactNode;
  isLoading: boolean;
  disabled?: boolean;
  removeText?: boolean;
  className?: ComponentProps<typeof Button>["className"];
  startIcon?: ComponentProps<typeof Button>["startIcon"];
  onClick?: ComponentProps<typeof Button>["onClick"];
  color?: ComponentProps<typeof Button>["color"];
  type?: ComponentProps<typeof Button>["type"];
}

const ButtonLoading = ({
  children,
  removeText,
  color = "primary",
  type = "button",
  isLoading,
  disabled,
  onClick,
  startIcon,
  className
}: InputProps) => {
  return (
    <Button
      color={color}
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={className}
    >
      {isLoading ? (
        <>
          <CircularProgress
            className={classNames(
              "text-inherit bg-inherit md:w-6 md:h-6 w-4 h-4",
              !removeText && "me-2"
            )}
          />
          {!removeText && (
            <Typography variant="t5" className="text-inherit font-bold">
              Loading...
            </Typography>
          )}
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonLoading;
