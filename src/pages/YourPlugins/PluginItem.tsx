import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@mui/material";
import { Plugin } from "apis/api";

type InputProps = {
  plugin: Plugin;
  onClick: () => void;
};

const PluginItem = ({ plugin, onClick }: InputProps) => (
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
      secondary={"Plugin/" + plugin.id}
      sx={{ color: "text.primary", secondary: "text.secondary" }}
    />
    <ListItemSecondaryAction>
      {/* <Tooltip
                open={tooltipOpenIndex === index}
                title="URL copied to clipboard"
                arrow
                placement="top">
                <IconButton
                  // onClick={() => handleCopyClick("https://aiplugin-api.azurewebsites.net/Plugin/" + mockedUserId + "/" + plugin.id, index)}
                  edge="end"
                  aria-label="copy">
                  <FontAwesomeIcon icon={faCopy} />
                </IconButton>
              </Tooltip> */}
      <IconButton onClick={onClick} edge="end" aria-label="modify">
        <FontAwesomeIcon icon={faPencilAlt} />
      </IconButton>
      {/* <IconButton disabled edge="end" aria-label="delete">
                <FontAwesomeIcon icon={faTrashAlt} color='white' />
              </IconButton> */}
    </ListItemSecondaryAction>
  </ListItem>
);

export default PluginItem;
