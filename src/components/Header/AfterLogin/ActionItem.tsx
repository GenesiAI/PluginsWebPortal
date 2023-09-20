import { MenuItem } from "@mui/material";
import classNames from "classnames";
import Typography from "components/Typography";
import { ComponentProps } from "react";

type InputProps = ComponentProps<typeof MenuItem> & {
  colorStyle?: "text-white" | "text-dangerLight";
};
const ActionItem = ({
  children,
  colorStyle = "text-white",
  className,
  ...props
}: InputProps) => {
  return (
    <MenuItem
      className={classNames("min-h-fit justify-center", className)}
      {...props}
    >
      <Typography variant="t4" className={`${colorStyle} font-semibold`}>
        {children}
      </Typography>
    </MenuItem>
  );
};

export default ActionItem;
