import { ChatApi, Message } from "apis";
import Button from "components/Button";
import Modal from "components/Modal";
import { useUserInfoCtx } from "components/UserInfo/UserInfo";
import { debugConsole } from "components/util";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form-mui";
import { formValue } from "./ChatCtx";

const useChat = () => {
  const { userInfo, getUserData } = useUserInfoCtx();
  const { getValues } = useFormContext();
  const [openModal, setOpenModal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const [counter, setCounter] = useState(
    userInfo.chatData?.messagesLast24H || 0
  );
  useEffect(() => {
    getUserData().then(
      (res) =>
        res?.chatData?.messagesLast24H != null &&
        setCounter(res?.chatData?.messagesLast24H)
    );
  }, [getUserData]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  const sendChat = useCallback(
    async ({ content }: formValue) => {
      try {
        let messages: Message[] = [];
        setMessages((prevValue) => {
          messages = [...prevValue, { content, role: "user" }];
          return messages;
        });
        if (content.startsWith("§GENESI_ERROR§")) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          throw new Error("Error test");
        }
        if (content.startsWith("§GENESI_NO_CHATGPT§")) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setMessages((prevValue) => {
            return [...prevValue, { content, role: "assistant" }];
          });
        } else {
          const aiPlugin = getValues();
          const chatApi = new ChatApi();
          await chatApi.apiChatPost({ aiPlugin, messages }).then((res) => {
            const { message } = res.data;
            setMessages((prevValue) => {
              return [...prevValue, message!];
            });
            setCounter(res.data.chatData!.messagesLast24H!);
            debugConsole(res);
          });
        }
      } catch (error) {
        debugConsole(error);
        setMessages((prevValue) => {
          prevValue.splice(prevValue.length - 1, 1);
          return [...prevValue];
        });
        setOpenModal(true);
      }
    },
    [getValues]
  );

  const resetState = useCallback(() => {
    setOpenModal(false);
  }, []);

  const modalError = (
    <Modal
      actions={
        <Button onClick={resetState} color="primary" variant="darkBg">
          CLOSE
        </Button>
      }
      open={openModal}
      handleClose={resetState}
      titleText="Generic error"
      contentText="Something went wrong, please retry."
    />
  );

  return {
    counter,
    sendChat,
    clearChat,
    messages,
    modalError,
    maxMessagesLast24H: userInfo.chatData?.maxMessagesLast24H || 0
  };
};

export default useChat;
