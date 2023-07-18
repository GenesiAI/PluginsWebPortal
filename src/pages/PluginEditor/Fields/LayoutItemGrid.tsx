import { Grid } from "@mui/material";
import React, { memo } from "react";

type InputProps = {
  children: React.ReactNode;
  full?: boolean;
  className?: string;
};

const LayoutItemGrid = ({ children, full, className }: InputProps) => (
  <Grid item xs={12} sm={full ? 12 : 6} className={className}>
    {children}
  </Grid>
);

export default memo(LayoutItemGrid);
