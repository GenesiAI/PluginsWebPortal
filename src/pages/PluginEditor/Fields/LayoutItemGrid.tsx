import { Grid } from "@mui/material";
import React, { memo } from "react";

type InputProps = {
  children: React.ReactNode;
  full?: boolean;
};

const LayoutItemGrid = ({ children, full }: InputProps) => (
  <Grid item xs={12} sm={full ? 12 : 6}>
    {children}
  </Grid>
);

export default memo(LayoutItemGrid);
