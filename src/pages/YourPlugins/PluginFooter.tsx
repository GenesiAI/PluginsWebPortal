import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconButtonTheme } from "theme";

const PluginFooter = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "center"
      }}
    >
      <Tooltip title="Create new plugin" arrow placement="top">
        {/* put this on the right, using float it goes out of the div */}
        <IconButton
          onClick={() => navigate("/plugin/new")}
          sx={IconButtonTheme}
        >
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default PluginFooter;
