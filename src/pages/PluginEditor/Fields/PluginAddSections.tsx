import AddIcon from "@mui/icons-material/Add";
import { Button, Grid } from "@mui/material";
import { memo } from "react";

type InputProps = {
  onClick: () => void;
};
const PluginAddSections = ({ onClick }: InputProps) => {
  return (
    <Grid item xs={12} sm={12} container justifyContent="center">
      <Button
        variant="text"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onClick}
      >
        Add Section
      </Button>
    </Grid>
  );
};

export default memo(PluginAddSections);
