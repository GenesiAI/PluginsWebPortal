import { Twitter } from "@mui/icons-material";
import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";

const socialIcons: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  marginTop: (theme) => theme.spacing(3)
};
const icon: SxProps<Theme> = {
  margin: (theme) => theme.spacing(1)
};

const SocialsBox: React.FC = () => (
  <Box sx={socialIcons}>
    {/* <Facebook className={classes.icon} /> */}
    <Link to="https://twitter.com/aipluginApp" target="_blank">
      <Twitter sx={icon} />
    </Link>
    {/* <LinkedIn className={classes.icon} />
             <Instagram className={classes.icon} /> */}
  </Box>
);

export default SocialsBox;
