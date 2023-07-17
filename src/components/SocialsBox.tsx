import { Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SocialsBox: React.FC = () => {
  return (
    <Box margin={4}>
      {/* <Facebook className={classes.icon} /> */}
      <Link to="https://twitter.com/aipluginApp" target="_blank">
        <Twitter />
      </Link>
      {/* <LinkedIn className={classes.icon} />
             <Instagram className={classes.icon} /> */}
    </Box>
  );
};

export default SocialsBox;
