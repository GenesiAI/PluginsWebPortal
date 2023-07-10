import { List } from "@mui/material";
import PluginFooter from "./PluginFooter";
import PluginHeader from "./PluginHeader";
import Plugins from "./Plugins";

const YourPlugins = () => (
  <List
    sx={{
      backgroundColor: "#f7f7f7",
      marginTop: 4,
      borderRadius: 3,
      padding: 3
    }}
  >
    <PluginHeader />
    <Plugins />
    <PluginFooter />
  </List>
);

export default YourPlugins;
