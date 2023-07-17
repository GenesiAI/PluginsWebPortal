import { List } from "@mui/material";
import Instructions from "./Instructions";
import PluginFooter from "./PluginFooter";
import PluginHeader from "./PluginHeader";
import Plugins from "./Plugins";

const YourPlugins = () => {
  return (
    <>
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
      <Instructions />
    </>
  );
};

export default YourPlugins;
