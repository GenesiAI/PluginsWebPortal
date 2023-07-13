import { Typography } from "@mui/material";
import { ComponentProps } from "react";

// Do that for avoid recreate object and static function in case of rerender
const sxObject: ComponentProps<typeof Typography>["sx"] = {
  textAlign: "center",
  fontWeight: "bold",
  color: (theme) => theme.palette.primary.main,
  marginBottom: (theme) => theme.spacing(2),
  marginTop: (theme) => theme.spacing(2)
};

const PluginHeader = () => {
  return (
    <Typography variant="h2" sx={sxObject}>
      Your Plugins
    </Typography>
  );
};

export default PluginHeader;
