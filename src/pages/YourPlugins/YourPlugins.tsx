import { List } from "@mui/material";
import { BoxContainer } from "theme";
import Instructions from "./Instructions";
import PluginFooter from "./PluginFooter";
import PluginHeader from "./PluginHeader";
import Plugins from "./Plugins";
import PluginsCtx from "./PluginsCtx";

const YourPlugins = () => (
  <PluginsCtx>
    <BoxContainer>
      <PluginHeader />
      <List>
        <Plugins />
      </List>
      <PluginFooter />
    </BoxContainer>
    <Instructions />
  </PluginsCtx>
);

export default YourPlugins;
