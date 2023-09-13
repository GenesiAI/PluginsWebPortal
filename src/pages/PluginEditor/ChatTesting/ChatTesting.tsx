import { Theme, useMediaQuery } from "@mui/material";
import { ReactPortal, memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { usePluginEditorCtxStatus } from "../PluginEditorCtx";
import ChatContainer from "./ChatContainer";
import ChatTestingMobile from "./ChatTestingMobile";
const ChatTesting = () => {
  const { htmlRefChat } = usePluginEditorCtxStatus();
  const [portal, setPortal] = useState<ReactPortal | null>(null);

  useEffect(() => {
    // I need a portal because I can't insert a form inside another form
    setPortal(createPortal(<ChatTestingCore />, htmlRefChat.current!));
  }, []);

  return <>{portal}</>;
};

const ChatTestingCore = () => {
  const isMd = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));

  return isMd ? <ChatContainer /> : <ChatTestingMobile />;
};

export default memo(ChatTesting);
