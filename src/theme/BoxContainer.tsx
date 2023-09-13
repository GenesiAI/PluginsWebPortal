import { Box } from "@mui/material";
import classNames from "classnames";
import { memo } from "react";

type InputProps = {
  children: React.ReactNode;
  className?: string;
  removePadding?: boolean;
  removeMargin?: boolean;
};

const BoxContainer = memo(
  ({ children, className, removePadding, removeMargin }: InputProps) => (
    <Box
      className={classNames(
        "rounded-3xl md:shadow-2xl !shadow-violet-300 md:bg-slate-50/80",
        !removePadding && "md:p-6",
        !removeMargin && "my-6 md:mx-4",
        className
      )}
    >
      {children}
    </Box>
  )
);

export { BoxContainer };
