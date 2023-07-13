import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton
} from "@mui/material";

const PluginSkeleton = () => (
  <ListItem>
    <ListItemAvatar>
      <Skeleton variant="circular">
        <Avatar />
      </Skeleton>
    </ListItemAvatar>
    <ListItemText>
      <Skeleton />
      <Skeleton width="60%" />
    </ListItemText>
  </ListItem>
);

export default PluginSkeleton;
