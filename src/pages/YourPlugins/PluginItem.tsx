import { faCopy, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip
} from "@mui/material";
import { Plugin } from "apis/api";
import { debugConsole } from "components/util";
import { useState } from "react";

type InputProps = {
  plugin: Plugin;
  onClick: () => void;
};

const PluginItem = ({ plugin, onClick }: InputProps) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState("Click to copy");

  const handleCopy = async (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop event propagation
    try {
      await navigator.clipboard.writeText(
        plugin.id + "." + process.env.REACT_APP_BACKEND_URL?.slice(15)
      );
      setTooltipTitle("Copied 🚀");
      setTooltipOpen(true);
    } catch (err) {
      debugConsole("Failed to copy text: ", err);
    }
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
    setTooltipTitle("Click to copy"); // Reset the tooltip title
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  return (
    <ListItem
      onClick={onClick}
      key={plugin.id}
      sx={{
        backgroundColor: (theme) => theme.palette.background.paper,
        borderRadius: 2,
        marginBottom: (theme) => theme.spacing(1),
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <ListItemAvatar>
        <Avatar
          src={
            plugin.logoUrl ??
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          }
        />
      </ListItemAvatar>
      <ListItemText
        primary={plugin.nameForHuman}
        secondary={
          <Tooltip
            title={tooltipTitle}
            open={tooltipOpen}
            onClose={handleTooltipClose}
            onOpen={handleTooltipOpen}
            placement="bottom"
            arrow
            enterDelay={200}
          >
            <span onClick={handleCopy}>
              {plugin.id + "." + process.env.REACT_APP_BACKEND_URL?.slice(15)}
              <FontAwesomeIcon icon={faCopy} className="ms-2" />
            </span>
          </Tooltip>
        }
        sx={{
          color: "text.primary",
          secondary: "text.secondary"
        }}
      />
      <ListItemSecondaryAction>
        <IconButton
          disabled={!plugin.isActive}
          onClick={onClick}
          edge="end"
          aria-label="modify"
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default PluginItem;
