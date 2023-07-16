import { Box, Divider, Link, List, ListItem } from "@mui/material";
import PluginFooter from "./PluginFooter";
import PluginHeader from "./PluginHeader";
import Plugins from "./Plugins";

const YourPlugins = () => {
  const testSteps = [
    "1. Copy the link",
    <Link href="https://chat.openai.com/">2. Go to the plugin store</Link>,
    "3. Press 'install unverified plugin'",
    "4. Paste the link and press 'Find plugin'"
  ];

  const releaseSteps = [
    <Link href="https://platform.openai.com/docs/plugins/review/submit-a-plugin-for-review#">
      1. Open the release plugin bot
    </Link>,
    "2. Insert link and your data",
    "3. Wait to be notified by email when OpenAI accept your plugin"
  ];

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
      <Box
        sx={{
          marginTop: 1,
          borderRadius: 3,
          padding: 3
        }}
      >
        <>
          <List>
            <ListItem>
              <b>How to test:</b>
            </ListItem>
            {testSteps.map((step, index) => (
              <ListItem key={index}>{step}</ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem>
              <b>How to release:</b>
            </ListItem>
            {releaseSteps.map((step, index) => (
              <ListItem key={index}>{step}</ListItem>
            ))}
          </List>
          <Link href="/support#runningPlugin">
            <b> Discover more on how to test and release your plugin</b>
          </Link>
        </>
      </Box>
    </>
  );
};

export default YourPlugins;
