import { Typography as TypographyCore } from "@mui/material";
import { memo } from "react";

interface InputProps {
  children?: React.ReactNode;
  variant?: "t1" | "t2" | "t3" | "t4" | "t5" | "t6";
  className?: string;
  component?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Typography = ({
  children = "change me",
  variant = "t4",
  className,
  component
}: InputProps) => {
  return component ? (
    <TypographyCore
      component={component}
      variant={variant}
      className={className}
    >
      {children}
    </TypographyCore>
  ) : (
    <TypographyCore variant={variant} className={className}>
      {children}
    </TypographyCore>
  );
};

export default memo(Typography);
