import { createContext, useContext, useMemo } from "react";
import ChatTesting from "./ChatTesting";
import useChat from "./useChat";

export type formValue = {
  content: string;
};

type ctx = Omit<ReturnType<typeof useChat>, "modalError">;

const initialCtxStatus: ctx = {
  counter: 0,
  maxMessagesLast24H: 0,
  clearChat: async () => {},
  messages: [],
  sendChat: async () => {}
};

const Ctx = createContext<ctx>(initialCtxStatus);

const ChatCtx = () => {
  const {
    clearChat,
    counter,
    messages,
    sendChat,
    maxMessagesLast24H,
    modalError
  } = useChat();

  const ctx = useMemo(
    () => ({
      clearChat,
      counter,
      messages,
      sendChat,
      maxMessagesLast24H
    }),
    [clearChat, counter, messages, sendChat, maxMessagesLast24H]
  );

  return (
    <Ctx.Provider value={ctx}>
      {modalError}
      <ChatTesting />
    </Ctx.Provider>
  );
};

export const useChatCtx = () => useContext(Ctx);

export default ChatCtx;
