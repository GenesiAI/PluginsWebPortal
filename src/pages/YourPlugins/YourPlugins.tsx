import { List } from "@mui/material";
import { BoxContainer } from "theme";
import Instructions from "./Instructions";
import PluginFooter from "./PluginFooter";
import PluginHeader from "./PluginHeader";
import Plugins from "./Plugins";

const YourPlugins = () => (
  <>
    <BoxContainer>
      <PluginHeader />
      <List>
        <Plugins />
      </List>
      <PluginFooter />
    </BoxContainer>
    <Instructions />
  </>
);

export default YourPlugins;
