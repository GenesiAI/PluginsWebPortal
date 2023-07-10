import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
      Create your plugin here
      <Tooltip title="Create new plugin" arrow placement="top">
        {/* put this on the right, using float it goes out of the div */}
        <IconButton
          onClick={() => navigate("/plugin/new")}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: (theme) => theme.palette.primary.dark
            }
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default PluginFooter;
