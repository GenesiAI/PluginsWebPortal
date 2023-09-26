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
  startIcon?: ComponentProps<typeof Button>["startIcon"];
  onClick?: ComponentProps<typeof Button>["onClick"];
  color?: ComponentProps<typeof Button>["color"];
  type?: ComponentProps<typeof Button>["type"];
  variant?: ComponentProps<typeof Button>["variant"];
  className?: ComponentProps<typeof Button>["className"];
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
  className,
  variant
}: InputProps) => {
  return (
    <Button
      color={color}
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
      type={type}
      variant={variant}
      className={className}
    >
      {isLoading ? (
        <>
          <CircularProgress
            className={classNames(
              "h-4 w-4 bg-inherit text-inherit md:h-6 md:w-6",
              !removeText && "me-2"
            )}
          />
          {!removeText && (
            <Typography variant="t5" className="font-bold text-inherit">
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
