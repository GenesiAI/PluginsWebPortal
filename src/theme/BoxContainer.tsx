import { Box, SxProps, Theme } from "@mui/material";
import { memo } from "react";

type InputProps = {
  children: React.ReactNode;
};

const BoxContainerSx: SxProps<Theme> = {
  marginY: 3,
  marginX: { xs: 0, md: "16px" },
  padding: { xs: 0, md: 3 },
  borderRadius: 4
};

const BoxContainer = memo(({ children }: InputProps) => (
  <Box
    className="md:shadow-2xl !shadow-violet-300 md:bg-slate-50/80"
    sx={BoxContainerSx}
  >
    {children}
  </Box>
));

export { BoxContainer };
