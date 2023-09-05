import { Typography as TypographyCore } from "@mui/material";

interface InputProps {
  children?: React.ReactNode;
  variant?: "t1" | "t2" | "t3" | "t4" | "t5" | "t6";
  className?: string;
}

const Typography = ({
  children = "change me",
  variant = "t4",
  className
}: InputProps) => {
  return (
    <TypographyCore variant={variant} className={className}>
      {children}
    </TypographyCore>
  );
};

export default Typography;
